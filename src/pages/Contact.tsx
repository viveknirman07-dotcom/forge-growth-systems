import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    goal: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Website: ${formData.website || "Not provided"}
Budget: ${formData.budget || "Undecided"}

Goal:
${formData.goal}`;

    const mailtoLink = `mailto:bitwellforge@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Thank you",
      description: "We usually reply within two business days.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      goal: "",
      budget: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="section-spacing">
        <div className="container-narrow">
          <h1 className="text-display mb-6">Contact</h1>
          <p className="text-body-l text-muted-foreground mb-12">
            Start a conversation. No sales pressure. Just clarity.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="border-input focus:ring-[rgba(0,0,0,0.12)]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Work email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="border-input focus:ring-[rgba(0,0,0,0.12)]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company or practice</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="border-input focus:ring-[rgba(0,0,0,0.12)]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website or LinkedIn</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="border-input focus:ring-[rgba(0,0,0,0.12)]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal">What are you trying to achieve *</Label>
              <Textarea
                id="goal"
                value={formData.goal}
                onChange={(e) =>
                  setFormData({ ...formData, goal: e.target.value })
                }
                required
                rows={5}
                className="border-input focus:ring-[rgba(0,0,0,0.12)] resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget range (optional)</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) =>
                  setFormData({ ...formData, budget: value })
                }
              >
                <SelectTrigger className="border-input">
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undecided">Undecided</SelectItem>
                  <SelectItem value="2k-5k">$2k–$5k</SelectItem>
                  <SelectItem value="5k-15k">$5k–$15k</SelectItem>
                  <SelectItem value="15k-50k">$15k–$50k</SelectItem>
                  <SelectItem value="50k+">$50k+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" size="lg" className="hover-lift w-full sm:w-auto">
              Send
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
