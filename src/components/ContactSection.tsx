import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  MapPin,
  Phone,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  language: 'es' | 'en';
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const content = {
    es: {
      title: "¡Conecta con la Innovación!",
      subtitle: "Hablemos de tu Próximo Gran Proyecto",
      description: "¿Buscas potenciar tu finca con tecnología? ¿Necesitas una workstation IA de alto rendimiento? ¿Quieres explorar el futuro del monitoreo agrícola? Contáctanos para una consulta personalizada.",
      contact: {
        whatsapp: "WhatsApp",
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        brochure: "Descargar Brochure"
      },
      location: "Fusagasugá, Cundinamarca, Colombia",
      quickContact: "Contacto Rápido",
      social: "Síguenos",
      cta: "Iniciar Conversación"
    },
    en: {
      title: "Connect with Innovation!",
      subtitle: "Let's Talk About Your Next Big Project",
      description: "Looking to power up your farm with technology? Need a high-performance AI workstation? Want to explore the future of agricultural monitoring? Contact us for a personalised consultation.",
      contact: {
        whatsapp: "WhatsApp",
        email: "Email", 
        linkedin: "LinkedIn",
        github: "GitHub",
        brochure: "Download Brochure"
      },
      location: "Arbeláez, Cundinamarca, Colombia",
      quickContact: "Quick Contact",
      social: "Follow Us",
      cta: "Start Conversation"
    }
  };

  const text = content[language];

  const contactMethods = [
    {
      icon: MessageSquare,
      label: text.contact.whatsapp,
      value: "+57 319 791 9742",
      link: "https://wa.me/573197919742",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      icon: Mail,
      label: text.contact.email,
      value: "lukas@ir-productions.com",
      link: "mailto:lukasmoyanomorales@gmail.com",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Linkedin,
      label: text.contact.linkedin,
      value: "MasterLukasMoyano",
      link: "https://www.linkedin.com/in/masterlukasmoyano/",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Github,
      label: text.contact.github,
      value: "_-IR-_ Productions",
      link: "https://github.com/LukasMoyano/ir-productions-nexus/blob/main/README.md",
      color: "text-secondary",
      bg: "bg-secondary/10"
    }
  ];

  return (
    <section id={language === 'es' ? 'contacto' : 'contact'} className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {text.quickContact}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text-gold">
            {text.subtitle}
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="tech-border hover-lift group cursor-pointer"
                onClick={() => window.open(method.link, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${method.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {method.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {method.value}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Info & CTA */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="tech-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-agro-green/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-agro-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {language === 'es' ? 'Ubicación' : 'Location'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {text.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Brochure Download */}
            <Card className="tech-border hover-lift group cursor-pointer glow-gold">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Download className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {text.contact.brochure}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' 
                    ? 'Información completa sobre nuestros servicios'
                    : 'Complete information about our services'
                  }
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group/btn"
                >
                  PDF
                  <Download className="ml-2 w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Main CTA */}
            <Button 
              size="lg" 
              className="w-full glow-red group"
              onClick={() => window.open('https://wa.me/573197919742', '_blank')}
            >
              {text.cta}
              <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo & Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IR</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  Lukas Moyano
                </h3>
                <p className="text-sm text-muted-foreground">
                  _-IR-_ Productions
                </p>
              </div>
            </div>

            {/* Slogan */}
            <div className="text-center">
              <p className="text-accent italic font-medium">
                "Funk with us!"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">{text.social}:</span>
              <div className="flex space-x-2">
                {[
                  { icon: Linkedin, link: "https://linkedin.com/in/lukasmoyano" },
                  { icon: Github, link: "https://github.com/LukasMoyano/ir-productions-nexus/blob/main/README.md" },
                  { icon: Mail, link: "mailto:lukas@ir-productions.com" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(social.link, '_blank')}
                    className="w-8 h-8 p-0 hover:text-primary"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;