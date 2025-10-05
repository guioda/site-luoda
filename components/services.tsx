import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Leaf, Sparkles, Zap, Clock, Star } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Massagem Relaxante",
    description: "Técnica suave que promove relaxamento profundo e alívio do estresse do dia a dia.",
    duration: "60 min",
    benefits: ["Reduz ansiedade", "Melhora o sono", "Relaxamento muscular"],
  },
  {
    icon: Zap,
    title: "Massagem Terapêutica",
    description: "Tratamento focado em dores específicas e tensões musculares crônicas.",
    duration: "90 min",
    benefits: ["Alívio de dores", "Melhora postura", "Recuperação muscular"],
  },
  {
    icon: Leaf,
    title: "Drenagem Linfática",
    description: "Técnica especializada para estimular o sistema linfático e reduzir inchaços.",
    duration: "75 min",
    benefits: ["Reduz inchaço", "Desintoxica", "Melhora circulação"],
  },
  {
    icon: Sparkles,
    title: "Reflexologia",
    description: "Massagem nos pés que estimula pontos reflexos conectados a todo o corpo.",
    duration: "45 min",
    benefits: ["Equilibra energia", "Reduz tensão", "Bem-estar geral"],
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tratamentos Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada sessão é personalizada para suas necessidades específicas, utilizando técnicas comprovadas para seu
            bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">
                  <Clock className="w-3 h-3 mr-1" />
                  {service.duration}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center text-xs text-muted-foreground">
                      <Star className="w-3 h-3 mr-2 text-primary" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
