export type ChildrenProps = {
  label: string
  link: string
}

export type NavigationProps = {
  label: string
  link?: string
  children?: ChildrenProps[]
}[]

export const NAVIGATION_LINKS: NavigationProps = [
  {
    label: "A empresa",
    children: [
      {
        label: "Quem somos",
        link: "/quem-somos",
      },
      {
        label: "Missão",
        link: "/missão",
      },
      {
        label: "Valores",
        link: "/valores",
      },
      {
        label: "Mensagem do pca",
        link: "/mensagem-do-pca",
      },
    ],
  },
  {
    label: "Apoio ao cliente",
    link: "/apoio-ao-cliente",
  },
  {
    label: "Empresarial",
    link: "/empresarial",
  },
  {
    label: "Notícias",
    link: "/notícias",
  },
  {
    label: "Anuncie connosco",
    link: "/anuncie-connosco",
  },
  {
    label: "Rotas e preçário ",
    link: "/rotas-e-preçário",
  },
]
