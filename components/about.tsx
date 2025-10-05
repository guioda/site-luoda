import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Heart } from "lucide-react"

const stats = [
  { icon: Users, value: "500+", label: "Clientes Atendidos" },
  { icon: Clock, value: "5+", label: "Anos de Experiência" },
  { icon: Award, value: "3", label: "Certificações" },
  { icon: Heart, value: "98%", label: "Satisfação" },
]

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Sobre a Profissional
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Dedicada ao seu bem-estar
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Com mais de 5 anos de experiência em massoterapia, dedico-me a proporcionar tratamentos personalizados
                que promovem o equilíbrio entre corpo e mente.
              </p>
              <p className="leading-relaxed">
                Formada em Massoterapia com especializações em diversas técnicas, acredito que cada pessoa é única e
                merece um cuidado individualizado. Meu objetivo é ajudar você a alcançar maior qualidade de vida através
                do poder terapêutico da massagem.
              </p>
              <p className="leading-relaxed">
                Trabalho em um ambiente acolhedor e tranquilo, onde você pode relaxar completamente e se reconectar
                consigo mesmo.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src="/professional-massage-therapist-in-peaceful-treatme.jpg"
                alt="Massoterapeuta profissional"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-border/50">
                  <CardContent className="p-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
