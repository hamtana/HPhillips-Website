import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4">
        
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Hamish</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Phillips</span>
                    </h1>

                    <p className="txt-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm a software engineer and creative professional with a passion for both technology and sound.</p>
                    {/* Adding extra section in here about the things that i do */}
                    <p className="txt-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    In addition to my work in tech, I’m a producer, musician, and sound engineer—bringing creative energy and technical precision to every project I work on.</p>

                    <div className="opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>



                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
            </div>

    </section>
}