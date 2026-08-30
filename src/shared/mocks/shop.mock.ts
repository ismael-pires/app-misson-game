import item01 from '../../assets/item01.png'
import item02 from '../../assets/item02.png'
import item03 from '../../assets/item03.png'
import resgate01 from '../../assets/resgate01.png'
import resgate02 from '../../assets/resgate02.png'
import resgate03 from '../../assets/resgate03.png'
import type { ShopItem } from '../types/shop'

export const mockShopItems: ShopItem[] = [
  {
    id: 'item-01',
    name: 'Botas do Impulso',
    description: 'Concede um atributo extra ao seu personagem na próxima fase.',
    image: item01,
    price: 200,
    currency: 'dons',
  },
  {
    id: 'item-02',
    name: 'Poção da Cura',
    description: 'Recupera uma tentativa perdida na fase atual.',
    image: item02,
    price: 90,
    currency: 'dons',
  },
  {
    id: 'item-03',
    name: 'Botas Aladas',
    description: 'Concede tempo extra para responder às perguntas da fase.',
    image: item03,
    price: 350,
    currency: 'dons',
  },
  {
    id: 'resgate-01',
    name: 'Camiseta Apostolē',
    description: 'Camiseta oficial preta com a estampa da jornada.',
    image: resgate01,
    price: 59.9,
    currency: 'real',
  },
  {
    id: 'resgate-02',
    name: 'Boné Apostolē',
    description: 'Boné bordado com o logo Apostolē.',
    image: resgate02,
    price: 49.9,
    currency: 'real',
  },
  {
    id: 'resgate-03',
    name: 'Livro Apostolē',
    description: 'Edição especial capa dura: Transformando Missão em Colaboração.',
    image: resgate03,
    price: 79.9,
    currency: 'real',
  },
]
