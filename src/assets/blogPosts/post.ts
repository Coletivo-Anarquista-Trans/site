// assets/blogPosts/post.ts
interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: "post-1",
    title: "marcha  transmasc 30-03-2025",
    description: "n3o",
    slug: "marcha-transmasc-30-03-2025",
    date: "03-30-2025",
    image: "marcha.jpeg",
    content: `
      <h2>marcha  transmasc 30-03-2025</h2>
      <p>ao perder o costume de escrever me vejo como criança: começo, apago, vejo e revejo, me repreendo, me anulo. engraçado, fui assim quando criança.
ainda sou, me vigio passo-a-passo, sou meu próprio cão e adestrador, mantenho as ovelhas dentro do cercado e essa cerca se estreita, sufoca.
nesse dia que me vejo ao lado de tantos iguais a mim sinto o lapso de alívio desse sufoco, de tanto tentar acertar e me pegar errando.
talvez seja a maturidade dos quase três anos vivendo a transgeneridade, ou ter transcentrado as minhas relações, o apoio dos meus pais e não receber mais os olhares estranhos depois de alguns anos em terapia hormonal, talvez tenha sido ler joão walter nery e paul preciado. ou tudo junto, somado ao fato de que eu estava rodeado pelos meus e ali, gritando em uníssono por nossas vidas, pela primeira vez em muito tempo não senti medo de ser eu, e de estar errado em ser.
ainda que sejamos afrontados com a realidade das ruas e suas contradições, as violências que nos atravessam já ardem há tanto tempo que vezenquando passam batido, esquecemos, deixa passar.
veja bem, me adestrei por anos pra ser o que queriam de mim, soube ser comportada, silenciosa, soube não dar trabalho pros meus pais e pra minha família, fui um exemplo promissor até romper com uma lógica que, pra mim, nunca fez sentido. e ao escolher romper com isso também rompi com relações que me ofereceram como as essenciais pra que eu pudesse existir. desisti de muita coisa, sabia que a partir desse momento eu precisava garantir subsistência, existir pra construir o corpo que me fizesse bem, e isso não me faz nada além de dissidente.
quando converso com minhas amigas travestis que vivem a transgeneridade por muito mais tempo que eu, vejo a força de se manter vivo sendo açoitado todos os dias, sendo limitado por palavras, olhares, violências que gritam mas que também, por vezes, são tão silenciosas que passam batido aos nossos olhos, mas que marcam nossos corpos com ferro quente, faz sangrar igual.
se hoje, diferente de muitos como eu, me mantenho vivo e luto por isso é porque acredito que existir como um corpo transmasculino nesse mundo é revolucionário, não me acho importante mas em mim também não existe mais o cinismo de achar que diferentes formas de existir no mundo não são possíveis. utopia é liberdade, e é o que eu busco todos os dias, não só pra mim, não só pra pessoas trans, mas por todos que ja sentiram a dor da fome, a humilhação da miséria, do abuso, do preconceito, de se sentir indesejado, nojento, excluído, de sentir a frustração de não ter forças e de se ver sem saída, por todos que ja sentiram que a única opção era deixar de existir.
nossa luta é por trabalho, moradia, saúde, educação e dignidade, o básico para uma subsistência. mas também lutamos pelos afetos, por acessos, por outras maneiras de existir num mundo que nos aprisiona e que todos os dias reforça que não merecemos nem mesmo ser chamados pelos nomes que preferimos ser chamados.
a minha vida é luta, e vai ser até o final! laroyê! </p>
    `,
  },
  {
    id: "post-2",
    title: "Miauzers o( ❛ᴗ❛ )o",
    description: "mazrine",
    slug: "introducao-ao-miauzers",
    date: "2023-05-15",
    image: "miau.jpg",
    content: `
      <h2>O que é Miauzers?</h2>
      <p>Miauzers é uma ferramenta de resistência...</p>
    `,
  },

  // Add more posts here
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
