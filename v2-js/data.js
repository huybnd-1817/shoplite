export const products = [
  {
    id: 1,
    title: "Tai nghe không dây Pro",
    price: 799000,
    thumbnail: "https://placehold.co/300x220/e8f0fe/4a6cf7?text=Tai+nghe",
    category: "electronics",
    rating: 4.7,
  },
  {
    id: 2,
    title: "Áo thun basic unisex",
    price: 199000,
    thumbnail: "https://placehold.co/300x220/fce8e8/cf4444?text=Áo+thun",
    category: "clothing",
    rating: 4.3,
  },
  {
    id: 3,
    title: "Đèn bàn LED cảm ứng",
    price: 349000,
    thumbnail: "https://placehold.co/300x220/e8fce8/44cf55?text=Đèn+LED",
    category: "home",
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sạc dự phòng 20000mAh",
    price: 459000,
    thumbnail: "https://placehold.co/300x220/fef8e8/cf9a44?text=Sạc+dự+phòng",
    category: "electronics",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Quần jogger cotton",
    price: 289000,
    thumbnail: "https://placehold.co/300x220/f3e8fe/9a44cf?text=Quần+jogger",
    category: "clothing",
    rating: 4.2,
  },
  {
    id: 6,
    title: "Chuột không dây Bluetooth",
    price: 379000,
    thumbnail: "https://placehold.co/300x220/e8f4fe/448bcf?text=Chuột+BT",
    category: "electronics",
    rating: 4.4,
  },
  {
    id: 7,
    title: "Gối tựa lưng văn phòng",
    price: 249000,
    thumbnail: "https://placehold.co/300x220/fef0e8/cf6a44?text=Gối+tựa",
    category: "home",
    rating: 4.1,
  },
  {
    id: 8,
    title: "Bình giữ nhiệt 500ml",
    price: 179000,
    thumbnail: "https://placehold.co/300x220/e8fefc/44cfbf?text=Bình+giữ+nhiệt",
    category: "home",
    rating: 4.8,
  },
  {
    id: 9,
    title: "Cáp USB-C 1.2m bọc dù",
    price: 89000,
    thumbnail: "https://placehold.co/300x220/feffe8/b8cf44?text=Cáp+USB-C",
    category: "electronics",
    rating: 4.0,
  },
  {
    id: 10,
    title: "Áo hoodie oversize",
    price: 459000,
    thumbnail: "https://placehold.co/300x220/e8effe/5a6cf7?text=Hoodie",
    category: "clothing",
    rating: 4.6,
  },
];

export function filterByKeyword(list, keyword) {
    const q = keyword.toLowerCase();
    return list.filter(p => p.title.toLowerCase().includes(q));
}

export function sortByPrice(list, dir) {
    const res = [...list].sort((a, b) =>
        dir === 'desc' ? b.price - a.price : a.price - b.price
    );
    return res;
}
