
import { useState } from "react";
import ContentTypeCard from "./ContentTypeCard";
import ContentGenerator from "./ContentGenerator";
import { Mail, MessageSquare, BookOpen, TrendingUp } from "lucide-react";

const contentTypes = [
  {
    id: "marketing",
    title: "Marketing Copy",
    description: "Create compelling sales copy, product descriptions, and promotional content that converts.",
    icon: TrendingUp,
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    id: "social",
    title: "Social Media Posts",
    description: "Generate engaging posts for Facebook, Twitter, Instagram, and LinkedIn with optimal hashtags.",
    icon: MessageSquare,
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-600"
  },
  {
    id: "stories",
    title: "Short Stories",
    description: "Craft creative narratives, character-driven stories, and compelling fiction pieces.",
    icon: BookOpen,
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    id: "emails",
    title: "Email Drafts",
    description: "Write professional emails, newsletters, and automated email sequences that engage.",
    icon: Mail,
    gradient: "bg-gradient-to-br from-orange-500 to-red-600"
  }
];

const ContentTypeSelector = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  if (selectedType) {
    const contentType = contentTypes.find(type => type.id === selectedType);
    return (
      <ContentGenerator 
        contentType={contentType!}
        onBack={() => setSelectedType(null)}
      />
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What do you want to create today?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our popular content types and let AI generate personalized content for your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentTypes.map((type) => (
            <ContentTypeCard
              key={type.id}
              title={type.title}
              description={type.description}
              icon={type.icon}
              gradient={type.gradient}
              onClick={() => setSelectedType(type.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentTypeSelector;
