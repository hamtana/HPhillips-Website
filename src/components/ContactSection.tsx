import { Linkedin, Mail, MapPin} from "lucide-react";


export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In 
                    <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I am always open to discussing new opportunities.
                </p>

                {/* Contact section */}
                <div className="container mx-auto max-w-5xl">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            
                            {/* Mail */}
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:hamish@phillipsmusictech.co.nz" className="text-muted-foreground hover:text-primary transition-colors">hamish.phillipsmusictech.co.nz</a>
                                </div>
                            </div>

                        {/* Location  */}
                        <div className="flex flex-col items-center text-center space-y-2">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Wellington, New Zealand</a>
                                </div>
                            </div>
                        </div>

                        {/* Other Links */}
                        <div className="pt-8">
                            <h4>Connect with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/hamish-phillips-330299306/" target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>

        </section>
    );
}