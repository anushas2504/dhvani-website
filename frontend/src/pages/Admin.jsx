import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Trash2, RefreshCw, ArrowLeft } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/leads");
      setLeads(data);
    } catch (e) {
      toast.error("Failed to load leads.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    try {
      await api.delete(`/leads/${id}`);
      setLeads((l) => l.filter((x) => x.id !== id));
      toast.success("Lead removed.");
    } catch {
      toast.error("Could not delete.");
    }
  };

  return (
    <div data-testid="admin-page" className="min-h-screen bg-[#FDFBF7] text-[#1E4D8C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <Link
              to="/"
              data-testid="admin-back"
              className="inline-flex items-center gap-2 text-sm text-[#1E4D8C]/70 hover:text-[#1E4D8C] mb-3"
            >
              <ArrowLeft size={16} /> Back to site
            </Link>
            <p className="overline">◆ Admin Console</p>
            <h1 className="font-display text-4xl sm:text-5xl mt-3">Lead Inbox</h1>
            <p className="text-[#4A5568] mt-2">{leads.length} {leads.length === 1 ? "enquiry" : "enquiries"} received</p>
          </div>
          <button
            onClick={load}
            data-testid="admin-refresh"
            className="btn-navy px-5 py-3 inline-flex items-center gap-2"
          >
            <RefreshCw size={16} /> Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex items-center gap-3 text-[#4A5568]">
            <Loader2 className="animate-spin" size={18} /> Loading…
          </div>
        ) : leads.length === 0 ? (
          <div data-testid="admin-empty" className="border border-dashed border-[#1E4D8C]/20 p-16 text-center">
            <p className="font-display text-2xl">No enquiries yet.</p>
            <p className="text-[#4A5568] mt-2">Leads submitted from the contact form will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#1E4D8C]/10">
            <table className="w-full text-sm" data-testid="leads-table">
              <thead className="bg-[#F3F0EA] text-left">
                <tr>
                  {["Name", "Email", "Phone", "Service", "Message", "Received", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs uppercase tracking-[0.16em] text-[#1E4D8C]/70 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} data-testid={`lead-row-${l.id}`} className="border-t border-[#1E4D8C]/10 align-top">
                    <td className="px-4 py-4 font-medium">{l.name}</td>
                    <td className="px-4 py-4 break-all"><a className="link-underline" href={`mailto:${l.email}`}>{l.email}</a></td>
                    <td className="px-4 py-4">{l.phone || "—"}</td>
                    <td className="px-4 py-4">{l.service || "—"}</td>
                    <td className="px-4 py-4 max-w-md text-[#4A5568]">{l.message}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-[#1E4D8C]/60">{new Date(l.created_at).toLocaleString()}</td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => remove(l.id)}
                        data-testid={`lead-delete-${l.id}`}
                        className="text-[#1E4D8C]/60 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
