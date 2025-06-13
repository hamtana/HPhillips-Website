import { Linkedin, Mail, MapPin, Send} from "lucide-react";
import { cn } from "../lib/utils";
import { toast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Email failed");

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center space-y-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">
            Contact Information
            </h3>

        <div className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
            <h4 className="font-medium">Email</h4>
            <a
                href="mailto:hamish@phillipsmusictech.co.nz"
                className="text-muted-foreground hover:text-primary transition-colors"
            >
                hamish@phillipsmusictech.co.nz
            </a>
            </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
            <h4 className="font-medium">Location</h4>
            <span className="text-muted-foreground hover:text-primary transition-colors">
                Wellington, New Zealand
            </span>
            </div>
        </div>
        </div>


            {/* Other Links */}
            <div className="pt-8">
            <h4>Connect with Me</h4>
            <div className="flex space-x-4 justify-center">
                <a
                href="https://www.linkedin.com/in/hamish-phillips-330299306/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Linkedin />
                </a>
            </div>
            </div>
        </div>

                
            <div className="bg-card rounded-lg shadow-xs" >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Email@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
                
 