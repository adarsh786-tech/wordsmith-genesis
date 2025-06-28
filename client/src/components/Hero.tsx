
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 py-20">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Sparkles className="h-4 w-4" />
          <span>AI-Powered Content Generation</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Create Amazing Content in
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}Seconds
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Generate personalized marketing copy, social media posts, stories, and emails 
          tailored to your specific needs with our advanced AI platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
          >
            Start Creating
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {/* <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Watch Demo
          </Button> */}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">10K+</div>
            <div className="text-sm text-muted-foreground">Content Pieces</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">5K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
