
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ContentTypeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  onClick: () => void;
}

const ContentTypeCard = ({ title, description, icon: Icon, gradient, onClick }: ContentTypeCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:-translate-y-2">
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          onClick={onClick}
          className="w-full bg-foreground hover:bg-foreground/90 text-background"
        >
          Create {title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContentTypeCard;
