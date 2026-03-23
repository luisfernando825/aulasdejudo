import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle2, Lock, Star, Play, ShieldCheck, Check, Gift, XCircle, ArrowRight, UserPlus, Mic, ClipboardCheck, Calendar, Gamepad2, TrendingUp, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-600 text-white py-3 px-6 rounded-full inline-flex items-center gap-3 font-black text-lg md:text-xl shadow-xl animate-pulse mb-8">
      <Clock size={24} />
      OFERTA EXPIRA EM: <span className="tabular-nums">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden mb-4 shadow-sm transition-all hover:border-blue-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 font-semibold text-slate-900 flex justify-between items-center"
      >
        <span className="pr-4">{question}</span>
        <span className="text-blue-600 text-2xl leading-none font-black shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-slate-600 font-normal leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

function VideoPlayer() {
  useEffect(() => {
    // Carrega o script da VSL apenas após a renderização inicial da página
    // Isso evita bloqueio de renderização (melhora o LCP e TBT no PageSpeed)
    const script = document.createElement('script');
    script.src = 'https://app.litevideo.net/p.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-blue-600 mb-10 w-full max-w-[400px] mx-auto bg-slate-900 aspect-[9/16] flex items-center justify-center">
      <div className="w-full h-full" dangerouslySetInnerHTML={{ 
        __html: '<lt-v2 v="67fd9526-720f-4ba1-bc50-3fb2e4e6147a" ar="9:16" p="ph=8&sc=0&pc=003cf0"></lt-v2>' 
      }} />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white text-center py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 sticky top-0 z-50 shadow-md">
        <Zap size={18} className="text-yellow-400 fill-yellow-400 animate-pulse" />
        OFERTA ESPECIAL: LIBERADA POR TEMPO LIMITADO
      </div>

      {/* Hero Section */}
      <section className="max-w-2xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 uppercase">
          <span className="block text-blue-600">+500 AULAS</span>
          DE JUDÔ PRONTAS
          <span className="block text-emerald-500 mt-2 md:mt-4 text-4xl md:text-6xl">+ 6 BÔNUS EXTRAS</span>
        </h1>
        <p className="text-lg md:text-xl font-semibold text-slate-600 mb-10 max-w-lg mx-auto leading-tight">
          O método definitivo para dominar o tatame e fidelizar seus alunos.
        </p>

        {/* Video Section */}
        <VideoPlayer />

        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full max-w-sm bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl font-black py-4 px-6 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 mb-6 mx-auto uppercase"
        >
          QUERO MEU ACESSO
        </button>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 font-semibold">
          <span className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-emerald-500" /> Acesso imediato</span>
          <span className="flex items-center gap-1.5"><Lock size={18} className="text-amber-500" /> Compra segura</span>
          <span className="flex items-center gap-1.5"><Star size={18} className="text-amber-400 fill-amber-400" /> 7 dias de garantia</span>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-black text-slate-900 mb-4">
          A dura realidade do Sensei:
        </h2>
        <p className="text-slate-600 font-medium mb-10">Ensinar Judô não precisa ser um fardo pesado de carregar.</p>
        
        <div className="grid gap-6">
          {[
            { title: 'Alunos Dispersos', desc: 'A dificuldade de prender a atenção e manter a disciplina.' },
            { title: 'Cansaço Mental', desc: 'O esgotamento de tentar criar algo novo todo santo dia.' },
            { title: 'Horas Planejando', desc: 'Tempo precioso que você perde em casa em vez de descansar.' },
            { title: 'Aulas Repetitivas', desc: 'O medo de ver os alunos desmotivados com a mesmice.' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-100 rounded-3xl p-6 flex items-center gap-5 text-left border border-slate-200">
              <div className="bg-white p-3 rounded-2xl shadow-sm text-2xl shrink-0">❌</div>
              <div>
                <h3 className="font-black text-slate-900 leading-none mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Method Section */}
      <section className="max-w-2xl mx-auto px-4 py-20">
        <div className="bg-blue-600 text-white p-12 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
          <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4 relative z-10">
            Não é esforço.<br/>É método.
          </h3>
          <p className="text-blue-100 font-semibold text-lg relative z-10">
            A estrutura certa transforma qualquer aula em um evento magnético.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-black text-slate-900 mb-4">
          O que você recebe no pacote:
        </h2>
        <p className="text-slate-600 font-medium mb-10">Tudo o que você precisa para um ano inteiro de sucesso.</p>
        
        <div className="grid gap-6">
          {[
            { title: '+500 Aulas Prontas', desc: 'Conteúdo didático completo, do aquecimento ao randori.' },
            { title: 'Planejamento Anual', desc: 'A visão macro do seu ensino para não pular etapas.' },
            { title: 'Planejamento Semanal', desc: 'O guia prático para aplicar no dia a dia sem erro.' },
            { title: 'Todas as Faixas', desc: 'Material adaptado para todos os níveis e idades.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex items-center gap-5 text-left transition-transform hover:scale-[1.02]">
              <div className="bg-blue-100 p-3 rounded-2xl text-blue-600 shrink-0">
                <Check strokeWidth={4} size={24} />
              </div>
              <div>
                <h3 className="font-black text-slate-900 leading-none mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonuses Section */}
      <div className="bg-blue-600 py-24">
        <section className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full mb-12 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <h2 className="text-sm sm:text-base md:text-xl font-black text-black uppercase tracking-wider whitespace-nowrap">
              6 bônus totalmente inclusos
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { 
                icon: <UserPlus />, 
                title: 'Manual do Sensei Iniciante', 
                desc: 'Domine a turma e passe autoridade total desde o primeiro dia.',
                image: 'https://i.imgur.com/gT69NGS.png',
                oldPrice: 'R$ 67,00'
              },
              { 
                icon: <Mic />, 
                title: 'Scripts de Comando e Didática', 
                desc: 'Saiba exatamente o que falar para explicar cada técnica de forma simples.',
                image: 'https://i.imgur.com/3NP5uXO.png',
                oldPrice: 'R$ 47,00'
              },
              { 
                icon: <ClipboardCheck />, 
                title: 'Sistema de Gestão de Exames', 
                desc: 'Um método profissional para organizar, avaliar e graduar seus alunos.',
                image: 'https://i.imgur.com/EN3pqnM.png',
                oldPrice: 'R$ 97,00'
              },
              { 
                icon: <Calendar />, 
                title: 'Cronograma Semanal de Treinos', 
                desc: 'O guia prático para saber o que ensinar em cada dia da semana.',
                image: 'https://i.imgur.com/KCDF5FO.png',
                oldPrice: 'R$ 47,00'
              },
              { 
                icon: <Gamepad2 />, 
                title: 'Judô Lúdico: Jogos e Dinâmicas', 
                desc: 'Dezenas de atividades recreativas para manter as crianças focadas e felizes.',
                image: 'https://i.imgur.com/DHeduNV.png',
                oldPrice: 'R$ 67,00'
              },
              { 
                icon: <TrendingUp />, 
                title: 'Mapa de Progressão Técnica', 
                desc: 'O caminho exato da evolução do aluno, da faixa branca até a preta.',
                image: 'https://i.imgur.com/fPNBHOk.png',
                oldPrice: 'R$ 47,00'
              },
            ].map((bonus, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-white/10 flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="h-32 w-full overflow-hidden bg-slate-200 relative">
                  <img 
                    src={bonus.image} 
                    alt={bonus.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                    BÔNUS {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h3 className="font-black text-slate-900 text-lg leading-tight mb-2">{bonus.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{bonus.desc}</p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[10px] line-through font-bold">{bonus.oldPrice}</span>
                    <span className="text-emerald-600 text-xs font-black">por R$ 0,00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 text-white rounded-[3rem] p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16"></div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Valor Total dos Bônus: <span className="line-through">R$ 197,00</span></p>
            <p className="text-emerald-400 font-black text-3xl md:text-4xl mt-2">HOJE: GRÁTIS</p>
          </div>
        </section>
      </div>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-2xl mx-auto px-4 py-20 text-center">
        <CountdownTimer />
        <div className="bg-white rounded-[3.5rem] p-8 md:p-12 border-4 border-blue-600 shadow-2xl relative w-full overflow-hidden">
          {/* Top Badge */}
          <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-black text-[10px] md:text-xs px-6 py-2 rounded-b-2xl uppercase tracking-widest shadow-lg whitespace-nowrap flex items-center gap-2">
            <Star size={12} className="fill-white" /> MAIS POPULAR ENTRE LÍDERES <Star size={12} className="fill-white" />
          </div>
          
          <div className="mt-12 mb-10">
            <h2 className="text-5xl md:text-7xl font-black text-blue-600 mb-6 uppercase tracking-tighter leading-none">
              PLANO<br/>COMPLETO
            </h2>
            
            <div className="inline-block bg-blue-50 text-blue-600 font-black text-xs md:text-sm px-8 py-2.5 rounded-full uppercase tracking-widest mb-8">
              HOJE POR APENAS
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-slate-400 font-bold text-xl line-through mb-2">De R$ 67,00</p>
              <div className="flex items-start gap-1">
                <span className="text-2xl font-black text-blue-600 mt-3">R$</span>
                <span className="text-7xl md:text-8xl font-black text-blue-600 tracking-tighter leading-none">12,90</span>
              </div>
            </div>
          </div>

          {/* Main Features */}
          <div className="max-w-xs mx-auto space-y-4 mb-10 text-left">
            {[
              '+500 Aulas de Judô Prontas',
              'Planejamento Anual e Semanal',
              'Material para Todas as Faixas',
              'Acesso Imediato e Vitalício'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm md:text-base">
                <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Bonus Box */}
          <div className="bg-blue-50/50 rounded-[2.5rem] p-6 md:p-8 border-2 border-blue-600 relative mb-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-black text-[10px] px-4 py-2 rounded-full uppercase tracking-widest shadow-md flex items-center gap-2 whitespace-nowrap">
              <Gift size={12} /> +6 BÔNUS EXCLUSIVOS HOJE
            </div>
            
            <div className="grid grid-cols-1 gap-4 text-left mt-4">
              {[
                'Manual do Sensei Iniciante',
                'Scripts de Comando e Didática',
                'Sistema de Gestão de Exames',
                'Cronograma Semanal de Treinos',
                'Judô Lúdico: Jogos e Dinâmicas',
                'Mapa de Progressão Técnica'
              ].map((bonus, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <Gift size={16} className="text-emerald-500 shrink-0" />
                  <span>{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xl md:text-2xl font-black py-6 px-6 rounded-3xl shadow-2xl shadow-emerald-500/40 transition-all hover:scale-105 flex items-center justify-center gap-3 uppercase">
            QUERO MEU ACESSO AGORA 🔥
          </button>
          
          <p className="mt-6 text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <ShieldCheck size={14} /> Ambiente 100% Seguro
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 uppercase tracking-tight">
          O QUE OUTROS SENSEIS DIZEM:
        </h2>
        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-16"
          >
            {[
              'https://i.imgur.com/iEIadN2.png',
              'https://i.imgur.com/dnv93qe.png',
              'https://i.imgur.com/vzUlscB.png',
              'https://i.imgur.com/q0ADEMK.png'
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-transform h-full aspect-[4/5] flex items-center justify-center relative">
                  <img 
                    src={src} 
                    alt={`Depoimento ${i + 1}`} 
                    className="w-full h-full object-contain absolute inset-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-2xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-10">
          Dúvidas Frequentes:
        </h2>
        <div className="max-w-xl mx-auto">
          <FAQItem
            question="Como recebo o acesso?"
            answer="O acesso é enviado automaticamente para o seu e-mail logo após a confirmação do pagamento. Você recebe um link para baixar todo o material."
          />
          <FAQItem
            question="O material serve para crianças?"
            answer="Sim! O método foi pensado para ser lúdico e educativo, sendo perfeito para o Judô infantil, mas também adaptável para adultos."
          />
          <FAQItem
            question="O pagamento é mensal?"
            answer="Não. Você paga apenas uma vez e tem acesso vitalício a todo o conteúdo e futuras atualizações do pacote."
          />
          <FAQItem
            question="Preciso de internet para usar?"
            answer="Você precisa de internet apenas para baixar os arquivos. Depois disso, pode acessar tudo offline no seu celular, tablet ou computador."
          />
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="max-w-2xl mx-auto px-4 py-20 mb-20 text-center">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100">
          <img 
            src="https://i.imgur.com/urfTmet.png" 
            alt="Garantia" 
            className="w-full max-w-[300px] aspect-square mx-auto mb-8 object-contain"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-blue-600 leading-tight">
            Sua Satisfação Garantida <br /> ou seu Dinheiro de Volta
          </h2>
          <p className="text-slate-500 font-medium text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            Você tem 7 dias inteiros para testar todo o material. Se por qualquer motivo você achar que o método não é para você, basta nos enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas e sem burocracia. O risco é todo nosso!
          </p>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-emerald-500 text-white font-black text-xl py-6 px-6 rounded-2xl shadow-lg hover:bg-emerald-600 transition-all hover:scale-105 flex items-center justify-center gap-3 uppercase"
          >
            QUERO MEU ACESSO AGORA 🔥
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm mb-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
          
          <p className="text-white font-bold text-lg mb-4">
            +500 Aulas de Judô Prontas para Aplicar
          </p>
          
          <p className="text-sm mb-6">
            © 2026 Todos os direitos reservados.
          </p>
          
          <p className="text-xs italic opacity-60 max-w-md mx-auto leading-relaxed">
            Este produto é digital. Após a confirmação do pagamento, o acesso é enviado por email.
          </p>
        </div>
      </footer>
    </div>
  );
}


