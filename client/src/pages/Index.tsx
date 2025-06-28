
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContentTypeSelector from "@/components/ContentTypeSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ContentTypeSelector />
    </div>
  );
};

export default Index;
