import ZampieriLogo from "@/components/ZampieriLogo";
import RegistrationForm from "@/components/RegistrationForm";
import { GraduationCap, Star, Users, Instagram } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-25 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-xl border-b-4 border-green-600">
        <div className="container mx-auto px-4 py-8">
          <ZampieriLogo className="justify-center md:justify-start" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 tracking-tight">
              Matrículas 2026
            </h1>
            <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-bold text-xl mb-8 shadow-lg">
              🚀 Lista de Espera Exclusiva
            </div>
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed font-light">
              Seja o primeiro a saber sobre as <strong className="text-green-700">vagas disponíveis</strong> e 
              <strong className="text-green-800"> valores promocionais exclusivos</strong> para 2026
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-100 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Star className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="font-bold text-green-800 mb-3 text-xl">Excelência</h3>
              <p className="text-gray-600">Tradição em educação de qualidade</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-100 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <GraduationCap className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="font-bold text-green-800 mb-3 text-xl">Metodologia</h3>
              <p className="text-gray-600">Ensino inovador e personalizado</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-100 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Users className="h-16 w-16 text-green-700 mx-auto mb-6" />
              <h3 className="font-bold text-green-800 mb-3 text-xl">Comunidade</h3>
              <p className="text-gray-600">Ambiente acolhedor e familiar</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-10 rounded-3xl shadow-2xl mb-16">
            <h2 className="text-4xl font-bold mb-8">Vantagens Exclusivas da Lista de Espera</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Prioridade nas Vagas</h4>
                  <p className="text-green-100">Acesso antecipado às vagas disponíveis</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">💰</span>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Valores Promocionais</h4>
                  <p className="text-green-100">Descontos especiais para quem se cadastrar</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Informações em Primeira Mão</h4>
                  <p className="text-green-100">Seja o primeiro a saber de todas as novidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - More Prominent */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Cadastre-se Agora
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo e garante sua vaga na lista de espera exclusiva
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <ZampieriLogo className="justify-center mb-8 text-white" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-lg">Contato</h4>
              <p className="text-green-200">📞 (11) 99999-9999</p>
              <p className="text-green-200">secretaria@colegiozampieri.com.br</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Endereço</h4>
              <p className="text-green-200">Rua das Flores, 123</p>
              <p className="text-green-200">São Paulo - SP</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Instagram</h4>
              <div className="flex items-center justify-center gap-3">
                <Instagram className="h-6 w-6 text-green-200 hover:text-white transition-colors cursor-pointer" />
                <span className="text-green-200">@colegio_zampieri</span>
              </div>
              
            </div>
          </div>
          <div className="border-t border-green-700 pt-8">
            <p className="text-green-200">© 2025 Colégio Zampieri. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;