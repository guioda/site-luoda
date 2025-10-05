import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Profissional Certificada
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Bem-estar através da
            <span className="text-primary block mt-2">Massoterapia</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Tratamentos personalizados que promovem relaxamento, alívio de tensões e melhoria da qualidade de vida
            através de técnicas especializadas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3">
              Agendar Consulta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              Conhecer Serviços
            </Button>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-muted/50 border border-border">
            <img
              src="/peaceful-massage-therapy-room-with-soft-lighting-a.jpg"
              alt="Ambiente de massoterapia tranquilo e acolhedor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
