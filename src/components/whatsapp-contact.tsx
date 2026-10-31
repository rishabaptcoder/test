const message =
  "Hello Kaushal Hub, I visited your website and would like to know more about your programs and learning initiatives.";

const whatsappUrl = `https://wa.me/919318497057?text=${encodeURIComponent(message)}`;

export function WhatsAppContact() {
  return (
    <div className="floating-whatsapp group">
      <span
        id="whatsapp-contact-tooltip"
        role="tooltip"
        className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-ink px-3 py-2 text-small font-medium text-primary-foreground opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 md:block"
      >
        Chat with us on WhatsApp
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Kaushal Hub on WhatsApp"
        aria-describedby="whatsapp-contact-tooltip"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_3px_12px_rgba(15,39,71,0.22)] transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200 focus-visible:ring-offset-2 md:size-[60px]"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-8 fill-current md:size-9"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.825 9.825 0 0 1 6.987 2.898 9.825 9.825 0 0 1 2.892 6.993c-.003 5.45-4.437 9.885-9.883 9.885M20.464 3.69A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.893c-.001 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.479-8.413" />
        </svg>
      </a>
    </div>
  );
}
