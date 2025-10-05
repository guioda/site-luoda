import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">M</span>
            </div>
            <span className="font-semibold text-foreground">Massoterapia Profissional</span>
          </div>

          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>para seu bem-estar</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Massoterapia Profissional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
