export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  collection: string;
  rating: number;
  reviews: number;
  image: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
};

export const PRODUCTS: Product[] = [
  {
    "id": "1",
    "name": "EQUINOX",
    "slug": "equinox",
    "description": "Yuzu | ISO E Super + Oud | Ambroxan (Launch fragrance)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 369,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "2",
    "name": "SOLSTICE",
    "slug": "solstice",
    "description": "Saffron | Oud | Amber",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 435,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "3",
    "name": "MONSOON",
    "slug": "monsoon",
    "description": "Petrichor | Green Tea | Musk",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 339,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "4",
    "name": "ZENITH",
    "slug": "zenith",
    "description": "Bergamot | Cardamom | Vanilla",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 340,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "5",
    "name": "MERIDIAN",
    "slug": "meridian",
    "description": "Tuberose | Sandalwood | Cedar",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 214,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "6",
    "name": "APHELION",
    "slug": "aphelion",
    "description": "Ginger | Leather | Smoke",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 375,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "7",
    "name": "DHARMA",
    "slug": "dharma",
    "description": "(India-inspired)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 57,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "8",
    "name": "SAHARA",
    "slug": "sahara",
    "description": "(Desert heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 219,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "9",
    "name": "GULF STREAM",
    "slug": "gulf-stream",
    "description": "(Ocean currents)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 57,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "10",
    "name": "SIROCCO",
    "slug": "sirocco",
    "description": "(Hot desert wind)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 54,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "11",
    "name": "HARMATTAN",
    "slug": "harmattan",
    "description": "(Hot wind, Africa)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 151,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "12",
    "name": "MONSOON BREAK",
    "slug": "monsoon-break",
    "description": "(Tropical rain)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 332,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "13",
    "name": "EQUATOR",
    "slug": "equator",
    "description": "(Geographic reference)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 134,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "14",
    "name": "TROPICA",
    "slug": "tropica",
    "description": "(Tropical essence)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 425,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "15",
    "name": "HUMID",
    "slug": "humid",
    "description": "(Weather phenomenon)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 254,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "16",
    "name": "MIRAGE",
    "slug": "mirage",
    "description": "(Heat illusion)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 434,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "17",
    "name": "TORRID",
    "slug": "torrid",
    "description": "(Extreme heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 138,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "18",
    "name": "CALDEIRA",
    "slug": "caldeira",
    "description": "(Volcanic heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 430,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "19",
    "name": "FERVID",
    "slug": "fervid",
    "description": "(Passionate heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 75,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "20",
    "name": "THERMAL",
    "slug": "thermal",
    "description": "(Heat energy)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 431,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "21",
    "name": "INCANDESCENT",
    "slug": "incandescent",
    "description": "(Glowing heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 172,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "22",
    "name": "RADIANT",
    "slug": "radiant",
    "description": "(Radiating warmth)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 168,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "23",
    "name": "IGNITE",
    "slug": "ignite",
    "description": "(Heat/flame)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 200,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "24",
    "name": "EMBER",
    "slug": "ember",
    "description": "(Glowing coals)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 397,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "25",
    "name": "ABLAZE",
    "slug": "ablaze",
    "description": "(On fire)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 310,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "26",
    "name": "INFERNO",
    "slug": "inferno",
    "description": "(Intense heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 237,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "27",
    "name": "MUMBAI NIGHTS",
    "slug": "mumbai-nights",
    "description": "(India origin)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 115,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "28",
    "name": "DUBAI GOLD",
    "slug": "dubai-gold",
    "description": "(UAE luxury)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 435,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "29",
    "name": "BANGKOK SILK",
    "slug": "bangkok-silk",
    "description": "(Thailand elegance)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 100,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "30",
    "name": "SINGAPORE SPICE",
    "slug": "singapore-spice",
    "description": "(Asia blend)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 249,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "31",
    "name": "JAKARTA HEAT",
    "slug": "jakarta-heat",
    "description": "(Indonesia tropical)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 325,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "32",
    "name": "MANILA BREEZE",
    "slug": "manila-breeze",
    "description": "(Philippines)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 57,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "33",
    "name": "NAIROBI AMBER",
    "slug": "nairobi-amber",
    "description": "(Africa luxury)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 130,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "34",
    "name": "LAGOS SPARK",
    "slug": "lagos-spark",
    "description": "(West Africa)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 390,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "35",
    "name": "ABUJA RHYTHM",
    "slug": "abuja-rhythm",
    "description": "(Nigeria)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 96,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "36",
    "name": "KIGALI MIST",
    "slug": "kigali-mist",
    "description": "(Rwanda)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 372,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "37",
    "name": "ACCRA GOLD",
    "slug": "accra-gold",
    "description": "(Ghana)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 52,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "38",
    "name": "CARIBBEAN FIRE",
    "slug": "caribbean-fire",
    "description": "(Island heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 102,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "39",
    "name": "HAVANA DUSK",
    "slug": "havana-dusk",
    "description": "(Cuba romance)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 261,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "40",
    "name": "CANCUN SOUL",
    "slug": "cancun-soul",
    "description": "(Mexico tropical)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 248,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "41",
    "name": "BRAZILIAN HEAT",
    "slug": "brazilian-heat",
    "description": "(South America)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 214,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "42",
    "name": "BUENOS AIRES PASSION",
    "slug": "buenos-aires-passion",
    "description": "(Argentina)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 144,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "43",
    "name": "COLOMBIAN DREAM",
    "slug": "colombian-dream",
    "description": "(Colombia)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 257,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "44",
    "name": "VENEZUELAN FLAME",
    "slug": "venezuelan-flame",
    "description": "(Venezuela)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 272,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "45",
    "name": "MALDIVES BLUE",
    "slug": "maldives-blue",
    "description": "(Indian Ocean)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 416,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "46",
    "name": "BALI RITUAL",
    "slug": "bali-ritual",
    "description": "(Indonesia)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 128,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "47",
    "name": "HANOI WHISPER",
    "slug": "hanoi-whisper",
    "description": "(Vietnam)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 369,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "48",
    "name": "KERALA ESSENCE",
    "slug": "kerala-essence",
    "description": "(India spice)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 51,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "49",
    "name": "GOA SUNSET",
    "slug": "goa-sunset",
    "description": "(India coast)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 383,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "50",
    "name": "COLOMBO SILK",
    "slug": "colombo-silk",
    "description": "(Sri Lanka)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 113,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "51",
    "name": "MAURITIUS OCEAN",
    "slug": "mauritius-ocean",
    "description": "(Island luxury)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 237,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "52",
    "name": "VELOCITY",
    "slug": "velocity",
    "description": "(Speed/performance)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 103,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "53",
    "name": "STAMINA",
    "slug": "stamina",
    "description": "(Long-lasting)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 303,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "54",
    "name": "ENDURANCE",
    "slug": "endurance",
    "description": "(All-day wear)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 274,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "55",
    "name": "TENACITY",
    "slug": "tenacity",
    "description": "(Persistence)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 237,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "56",
    "name": "VIGOR",
    "slug": "vigor",
    "description": "(Energy)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 426,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "57",
    "name": "POTENCY",
    "slug": "potency",
    "description": "(Intensity)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 281,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "58",
    "name": "SURGE",
    "slug": "surge",
    "description": "(Rising energy)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 178,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "59",
    "name": "PULSE",
    "slug": "pulse",
    "description": "(Heartbeat/life)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 197,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "60",
    "name": "RUSH",
    "slug": "rush",
    "description": "(Adrenaline)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 151,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "61",
    "name": "THRUST",
    "slug": "thrust",
    "description": "(Momentum)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 148,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "62",
    "name": "ASCEND",
    "slug": "ascend",
    "description": "(Rising up)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 74,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "63",
    "name": "SUMMIT",
    "slug": "summit",
    "description": "(Peak performance)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 78,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "64",
    "name": "APEX",
    "slug": "apex",
    "description": "(Highest point)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 168,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "65",
    "name": "TITAN",
    "slug": "titan",
    "description": "(Power/strength)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 109,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "66",
    "name": "IRON",
    "slug": "iron",
    "description": "(Unbreakable)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 351,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "67",
    "name": "STEEL",
    "slug": "steel",
    "description": "(Durable)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 375,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "68",
    "name": "FORTRESS",
    "slug": "fortress",
    "description": "(Strong hold)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 212,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "69",
    "name": "LEGACY",
    "slug": "legacy",
    "description": "(Lasting impact)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 176,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "70",
    "name": "ETERNAL",
    "slug": "eternal",
    "description": "(Never-ending)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 284,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "71",
    "name": "INFINITE",
    "slug": "infinite",
    "description": "(No limit)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 105,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "72",
    "name": "AMBER HEAT",
    "slug": "amber-heat",
    "description": "(Amber-forward)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 74,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "73",
    "name": "SPICE ROUTE",
    "slug": "spice-route",
    "description": "(Spice blend)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 63,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "74",
    "name": "WOODY SOUL",
    "slug": "woody-soul",
    "description": "(Wood-focused)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 380,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "75",
    "name": "FLORAL FIRE",
    "slug": "floral-fire",
    "description": "(Floral + heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 320,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "76",
    "name": "CITRUS BURST",
    "slug": "citrus-burst",
    "description": "(Citrus energy)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 277,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "77",
    "name": "MUSK LEGACY",
    "slug": "musk-legacy",
    "description": "(Musk-heavy)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 278,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "78",
    "name": "LEATHER SMOKE",
    "slug": "leather-smoke",
    "description": "(Leather + smoke)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 236,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "79",
    "name": "VANILLA NOIR",
    "slug": "vanilla-noir",
    "description": "(Dark vanilla)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 175,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "80",
    "name": "OUD OBSIDIAN",
    "slug": "oud-obsidian",
    "description": "(Deep oud)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 372,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "81",
    "name": "SPICY SEDUCTION",
    "slug": "spicy-seduction",
    "description": "(Spice sensual)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 279,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "82",
    "name": "FRESH INTENSITY",
    "slug": "fresh-intensity",
    "description": "(Fresh but strong)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 239,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "83",
    "name": "DARK BLOOM",
    "slug": "dark-bloom",
    "description": "(Dark florals)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 291,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "84",
    "name": "SMOKY JASMINE",
    "slug": "smoky-jasmine",
    "description": "(Jasmine + smoke)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 244,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "85",
    "name": "HONEYED WARMTH",
    "slug": "honeyed-warmth",
    "description": "(Honey + heat)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 218,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "86",
    "name": "ROASTED ESSENCE",
    "slug": "roasted-essence",
    "description": "(Roasted notes)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 165,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "87",
    "name": "PRISM",
    "slug": "prism",
    "description": "(Light refraction)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 150,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "88",
    "name": "CATALYST",
    "slug": "catalyst",
    "description": "(Change agent)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 287,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "89",
    "name": "NEXUS",
    "slug": "nexus",
    "description": "(Connection point)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 319,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "90",
    "name": "RESONANCE",
    "slug": "resonance",
    "description": "(Vibration)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 210,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "91",
    "name": "CHROMATIC",
    "slug": "chromatic",
    "description": "(Color-based)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 377,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "92",
    "name": "KINETIC",
    "slug": "kinetic",
    "description": "(Motion/energy)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 159,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "93",
    "name": "LUMINOUS",
    "slug": "luminous",
    "description": "(Glowing)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 437,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "94",
    "name": "OBSIDIAN",
    "slug": "obsidian",
    "description": "(Black stone)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 398,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "95",
    "name": "AURORA",
    "slug": "aurora",
    "description": "(Dawn)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 84,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "96",
    "name": "TERMINUS",
    "slug": "terminus",
    "description": "(End point/luxury)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 257,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "97",
    "name": "AXIOM",
    "slug": "axiom",
    "description": "(Truth/principle)",
    "price": 10499,
    "collection": "",
    "rating": 4.5,
    "reviews": 155,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "98",
    "name": "NEBULA",
    "slug": "nebula",
    "description": "(Space/cosmic)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 189,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "99",
    "name": "ALCHEMY",
    "slug": "alchemy",
    "description": "(Transformation)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 432,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "100",
    "name": "PARADIGM",
    "slug": "paradigm",
    "description": "(Pattern/model)",
    "price": 10499,
    "collection": "",
    "rating": 4.9,
    "reviews": 67,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "101",
    "name": "ARDENCE",
    "slug": "ardence",
    "description": "(Ardor + essence)",
    "price": 10499,
    "collection": "",
    "rating": 4.8,
    "reviews": 345,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "102",
    "name": "CALENTURE",
    "slug": "calenture",
    "description": "(Tropical fever/passion)",
    "price": 10499,
    "collection": "",
    "rating": 4.7,
    "reviews": 194,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "103",
    "name": "CHROMIUM",
    "slug": "chromium",
    "description": "(Luxury element)",
    "price": 10499,
    "collection": "",
    "rating": 4.6,
    "reviews": 351,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  },
  {
    "id": "104",
    "name": "VELOUR",
    "slug": "velour",
    "description": "(Luxury fabric)",
    "price": 10499,
    "collection": "",
    "rating": 5,
    "reviews": 219,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    "notes": {
      "top": [
        "Bergamot",
        "Pink Pepper"
      ],
      "middle": [
        "Iso E Super",
        "Jasmine"
      ],
      "base": [
        "Ambroxan",
        "Sandalwood"
      ]
    }
  }
];
