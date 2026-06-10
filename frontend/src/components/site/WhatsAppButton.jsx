import { SITE } from "@/lib/data";

export default function WhatsAppButton() {
  const url = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
    "Hi Dhvani — I'd like to discuss a project."
  )}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      data-testid="whatsapp-float"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg transition-transform group-hover:scale-110">
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.36c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.01 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.43 5.33L5 27l5.79-1.74a10.62 10.62 0 0 0 5.22 1.36h.01c5.89 0 10.67-4.78 10.67-10.67S21.9 5.33 16.01 5.33zm0 19.55h-.01a8.84 8.84 0 0 1-4.5-1.23l-.32-.19-3.43 1.03 1.05-3.34-.21-.34a8.86 8.86 0 1 1 7.42 4.07z" />
        </svg>
      </span>
    </a>
  );
}
