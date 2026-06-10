"""Backend API tests for Dhvani leads endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://project-gallery-267.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

created_ids = []


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    yield s
    # cleanup created leads
    for lid in created_ids:
        try:
            s.delete(f"{API}/leads/{lid}", timeout=10)
        except Exception:
            pass


# ---------- Health ----------
def test_root_ok(session):
    r = session.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"


# ---------- Create lead ----------
def test_create_lead_success(session):
    payload = {
        "name": "TEST_Anusha",
        "email": "test_anusha@example.com",
        "phone": "+919999999999",
        "service": "Digital Strategy",
        "message": "TEST_ I'd like to discuss a campaign.",
    }
    r = session.post(f"{API}/leads", json=payload, timeout=15)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["message"] == payload["message"]
    assert "_id" not in data
    created_ids.append(data["id"])


def test_create_lead_invalid_email(session):
    r = session.post(f"{API}/leads", json={
        "name": "TEST_bad",
        "email": "not-an-email",
        "message": "TEST_msg",
    }, timeout=15)
    assert r.status_code == 422


def test_create_lead_missing_fields(session):
    # missing message
    r = session.post(f"{API}/leads", json={"name": "TEST_X", "email": "x@y.com"}, timeout=15)
    assert r.status_code == 422
    # missing name
    r2 = session.post(f"{API}/leads", json={"email": "x@y.com", "message": "hi"}, timeout=15)
    assert r2.status_code == 422
    # missing email
    r3 = session.post(f"{API}/leads", json={"name": "TEST_X", "message": "hi"}, timeout=15)
    assert r3.status_code == 422


# ---------- List leads ----------
def test_list_leads_sorted_no_objectid(session):
    # Create two leads to verify ordering
    p1 = {"name": "TEST_first", "email": "f1@test.com", "message": "TEST_first"}
    p2 = {"name": "TEST_second", "email": "f2@test.com", "message": "TEST_second"}
    r1 = session.post(f"{API}/leads", json=p1, timeout=15); assert r1.status_code == 201
    created_ids.append(r1.json()["id"])
    import time; time.sleep(1.1)
    r2 = session.post(f"{API}/leads", json=p2, timeout=15); assert r2.status_code == 201
    created_ids.append(r2.json()["id"])

    r = session.get(f"{API}/leads", timeout=15)
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list) and len(items) >= 2
    for it in items:
        assert "_id" not in it
        assert "id" in it and "created_at" in it
    # sorted desc -> first item's created_at >= last's
    assert items[0]["created_at"] >= items[-1]["created_at"]


# ---------- Count ----------
def test_leads_count(session):
    r = session.get(f"{API}/leads/count", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert "count" in data and isinstance(data["count"], int) and data["count"] >= 1


# ---------- Delete ----------
def test_delete_lead_and_404(session):
    # create then delete
    payload = {"name": "TEST_del", "email": "del@test.com", "message": "TEST_del"}
    cr = session.post(f"{API}/leads", json=payload, timeout=15)
    assert cr.status_code == 201
    lid = cr.json()["id"]

    dr = session.delete(f"{API}/leads/{lid}", timeout=15)
    assert dr.status_code == 200
    assert dr.json().get("deleted") is True

    # delete again -> 404
    dr2 = session.delete(f"{API}/leads/{lid}", timeout=15)
    assert dr2.status_code == 404
