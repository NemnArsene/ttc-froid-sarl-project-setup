import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Loader2, User, Mail, Phone, Building2, MessageSquare } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { BRAND, SERVICES } from "../constants/tokens";

const subjects = ["Particulier", "Entreprise", "Industrie", "Hôtellerie", "Santé", "Autre"];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: SERVICES[0].id,
    profile: "Entreprise",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(30,91,168,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Contact"
              index="07"
              title="Parlons de votre projet. Nous répondons sous 2 heures."
              description="Appelez-nous, envoyez un WhatsApp ou remplissez le formulaire. Notre équipe est à votre écoute du lundi au samedi, 7h30–19h00, et 24/7 pour les urgences."
            />
            <Reveal delay={0.3}>
              <div className="mt-10 space-y-4 text-sm text-ice-100/70">
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
                  <span><span className="text-white">Réponse rapide :</span> 2h en moyenne à Douala</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
                  <a href={`tel:${BRAND.phoneWork}`} className="hover:text-white transition-colors"><span className="text-white">Pro & WhatsApp :</span> {BRAND.phoneWorkDisplay}</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
                  <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors"><span className="text-white">Personnel :</span> {BRAND.phoneDisplay}</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
                  <span><span className="text-white">Déplacement :</span> gratuit dans le Littoral</span>
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="relative rounded-3xl glass-strong frost-border p-6 sm:p-10"
                noValidate
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="ok"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto h-16 w-16 rounded-full bg-flame-500/20 border border-flame-500/40 flex items-center justify-center">
                        <Check className="h-7 w-7 text-flame-500" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                        Demande envoyée avec succès.
                      </h3>
                      <p className="mt-3 text-ice-100/70 max-w-md mx-auto">
                        Merci {data.name || "pour votre confiance"}. Un conseiller technique vous recontacte
                        dans les 2 prochaines heures ouvrées.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSent(false);
                          setData({ name: "", email: "", phone: "", company: "", subject: SERVICES[0].id, profile: "Entreprise", message: "" });
                        }}
                        className="mt-6 text-sm text-ice-100/60 hover:text-white transition-colors"
                      >
                        Envoyer une autre demande
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <Field icon={User} label="Nom complet" name="name" value={data.name} onChange={onChange} required />
                      <Field icon={Phone} label="Téléphone" name="phone" value={data.phone} onChange={onChange} type="tel" required />
                      <Field icon={Mail} label="Email" name="email" value={data.email} onChange={onChange} type="email" />
                      <Field icon={Building2} label="Société" name="company" value={data.company} onChange={onChange} />

                      <Select
                        label="Profil"
                        name="profile"
                        value={data.profile}
                        onChange={onChange}
                        options={subjects}
                      />
                      <Select
                        label="Service souhaité"
                        name="subject"
                        value={data.subject}
                        onChange={onChange}
                        options={SERVICES.map((s) => ({ value: s.id, label: s.short }))}
                      />

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-ice-100/50 mb-2">
                          Décrivez votre projet
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-ice-100/40" />
                          <textarea
                            name="message"
                            value={data.message}
                            onChange={onChange}
                            rows={4}
                            placeholder="Surface, type de bâtiment, contraintes, délais souhaités..."
                            className="w-full rounded-2xl bg-white/[0.03] border border-white/10 pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-ice-100/30 focus:outline-none focus:border-ice-300/40 focus:bg-white/[0.05] transition-all"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink-900 h-12 px-6 text-sm font-medium hover:bg-ice-50 transition-all disabled:opacity-60"
                        >
                          {loading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              Envoyer ma demande
                              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                        <a
                          href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Bonjour TTC FROID SARL, je souhaite obtenir un devis.")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 h-12 px-6 text-sm text-ice-100/90 hover:bg-white/10 transition-colors"
                        >
                          💬 WhatsApp
                        </a>
                        <p className="text-[11px] text-ice-100/40 sm:ml-auto max-w-[20ch]">
                          Vos données restent confidentielles.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon, label, name, value, onChange, type = "text", required
}: {
  icon: any; label: string; name: string; value: string; onChange: (e: any) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-ice-100/50 mb-2">
        {label} {required && <span className="text-flame-500">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ice-100/40" />
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          required={required}
          className="w-full rounded-2xl bg-white/[0.03] border border-white/10 h-12 pl-11 pr-4 text-sm text-white placeholder:text-ice-100/30 focus:outline-none focus:border-ice-300/40 focus:bg-white/[0.05] transition-all"
        />
      </div>
    </div>
  );
}

function Select({
  label, name, value, onChange, options
}: {
  label: string; name: string; value: string; onChange: (e: any) => void;
  options: string[] | { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-ice-100/50 mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl bg-white/[0.03] border border-white/10 h-12 px-4 text-sm text-white focus:outline-none focus:border-ice-300/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239FC7FF' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
        }}
      >
        {(typeof options[0] === "string" ? options : options).map((o: any) => {
          const v = typeof o === "string" ? o : o.value;
          const lbl = typeof o === "string" ? o : o.label;
          return (
            <option key={v} value={v} className="bg-ink-800">
              {lbl}
            </option>
          );
        })}
      </select>
    </div>
  );
}
