import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 99999-9999",
    action: "Ligar agora",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "(11) 99999-9999",
    action: "Enviar mensagem",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@massoterapia.com",
    action: "Enviar e-mail",
  },
  {
    icon: MapPin,
    title: "Localização",
    content: "São Paulo, SP",
    action: "Ver no mapa",
  },
]

const schedule = [
  { day: "Segunda a Sexta", hours: "8h às 18h" },
  { day: "Sábado", hours: "8h às 14h" },
  { day: "Domingo", hours: "Fechado" },
]

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Agende sua sessão</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estou aqui para ajudar você a encontrar o equilíbrio e bem-estar que merece. Entre em contato para agendar
            sua consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground mb-3">{info.content}</p>
                        <Button variant="outline" size="sm" className="text-xs bg-transparent">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted border border-border">
                  <img
                    src="/massage-therapy-clinic-location-map-view.jpg"
                    alt="Localização da clínica"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Horários de Atendimento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border/30 last:border-0"
                  >
                    <span className="text-sm text-muted-foreground">{item.day}</span>
                    <span className="text-sm font-medium text-foreground">{item.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">Primeira Consulta</h3>
                <p className="text-sm text-muted-foreground mb-4">Inclui avaliação completa e sessão personalizada</p>
                <Button className="w-full">Agendar Agora</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
