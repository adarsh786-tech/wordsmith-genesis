
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Wand2, Copy, Download, RefreshCw } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ContentType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

interface ContentGeneratorProps {
  contentType: ContentType;
  onBack: () => void;
}

const ContentGenerator = ({ contentType, onBack }: ContentGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [formData, setFormData] = useState({
    topic: "",
    tone: "",
    audience: "",
    length: "",
    context: "",
  });

  async function getAIResponse(prompt: string): Promise<string> {
    if (!prompt) {
      throw new Error("Prompt is required.");
    }
    // http://localhost:3001/
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/generate-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate content');
      }
  
      const data = await response.json();
      return data.content;
    } catch (error) {
      console.error("API call error:", error);
      throw error;
    }
  }
  

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(async () => {
      // const sampleContent = getSampleContent(contentType.id);
      const prompt = `Create ${formData.tone} ${contentType} about the ${formData.topic} for ${formData.audience}. ${formData.context}. Length: ${formData.length}.`
      const aiResponse = await getAIResponse(prompt);
      setGeneratedContent(aiResponse);
      setIsGenerating(false);
    }, 2000);
  };

  const getSampleContent = (type: string) => {
    const samples = {
      marketing: "🚀 Transform Your Business Today!\n\nDiscover the power of innovation with our cutting-edge solutions. Join thousands of satisfied customers who have already revolutionized their workflow.\n\n✅ 50% faster results\n✅ 99% customer satisfaction\n✅ 24/7 expert support\n\nDon't wait - your competitors won't. Start your free trial today and see the difference!",
      social: "✨ Monday motivation incoming! ✨\n\nRemember: Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown.\n\nWhat small step will you take today toward your big dreams? 💪\n\n#MondayMotivation #DreamBig #TakeAction #Success #Inspiration",
      stories: "The old lighthouse keeper had seen many storms, but none like this. As the waves crashed against the rocky shore, Sarah clutched the ancient logbook, its pages yellowed with time.\n\nInside, she discovered entries dating back a century - stories of ships saved, lives rescued, and one mysterious entry that would change everything: \"The light must never go out, for it guards more than just the harbor.\"\n\nWhat secret had been hidden here for so long?",
      emails: "Subject: Welcome to Your Journey with Us! 🎉\n\nHi [Name],\n\nWelcome aboard! We're thrilled to have you join our community of innovators and dreamers.\n\nHere's what you can expect in your first week:\n• A personalized onboarding call\n• Access to our exclusive resource library\n• Direct connection with your success manager\n\nWe're here to support you every step of the way. Reply to this email if you have any questions!\n\nBest regards,\nThe Team"
    };
    return samples[type as keyof typeof samples] || "Generated content will appear here...";
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 hover:bg-gray-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Content Types
          </Button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-12 h-12 rounded-xl ${contentType.gradient} flex items-center justify-center`}>
              <contentType.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{contentType.title}</h1>
              <p className="text-gray-600">{contentType.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl">Content Parameters</CardTitle>
              <CardDescription>
                Provide details to generate personalized content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic">Topic/Subject *</Label>
                <Input
                  id="topic"
                  placeholder="Enter your main topic or subject"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Tone</Label>
                <Select value={formData.tone} onValueChange={(value) => setFormData({...formData, tone: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                    <SelectItem value="persuasive">Persuasive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Input
                  id="audience"
                  placeholder="e.g., Young professionals, Parents, Tech enthusiasts"
                  value={formData.audience}
                  onChange={(e) => setFormData({...formData, audience: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="length">Content Length</Label>
                <Select value={formData.length} onValueChange={(value) => setFormData({...formData, length: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (50-100 words)</SelectItem>
                    <SelectItem value="medium">Medium (100-300 words)</SelectItem>
                    <SelectItem value="long">Long (300+ words)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="context">Additional Context</Label>
                <Textarea
                  id="context"
                  placeholder="Any additional information, style preferences, or specific requirements..."
                  value={formData.context}
                  onChange={(e) => setFormData({...formData, context: e.target.value})}
                  rows={4}
                />
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={!formData.topic || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4 mr-2" />
                    Generate Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Content */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl flex items-center justify-between">
                Generated Content
                {generatedContent && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                )}
              </CardTitle>
              <CardDescription>
                Your AI-generated content will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isGenerating ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <RefreshCw className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Generating your content...</p>
                  </div>
                </div>
              ) : generatedContent ? (
                <div className="bg-gray-50 rounded-lg p-6">
                  <pre className="whitespace-pre-wrap text-gray-900 font-medium leading-relaxed">
                    {generatedContent}
                  </pre>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <Wand2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Fill in the parameters and click generate to see your content</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContentGenerator;
