# LawLinkGlobal Dokümantasyon

Bu repo, [docs.lawlinkglobal.com](https://docs.lawlinkglobal.com) dokümantasyon sitesinin kaynak kodunu içerir. Site, Next.js ve Nextra kullanılarak oluşturulmuştur.

## Başlarken

### Gereksinimler

- Node.js 18.0.0 veya daha yeni
- npm veya yarn

### Kurulum

1. Repoyu klonlayın:

```bash
git clone https://github.com/lawlinkglobal/docs.git
cd docs
```

2. Bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
# veya
yarn dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
.
├── pages/             # Dokümantasyon sayfaları (MDX formatında)
│   ├── index.mdx      # Ana sayfa
│   ├── giris.mdx      # Giriş sayfası
│   ├── _meta.json     # Navigasyon yapılandırması
│   └── ...            # Diğer sayfalar
├── public/            # Statik dosyalar (resimler, vb.)
├── styles/            # CSS stilleri
├── theme.config.jsx   # Nextra tema yapılandırması
├── next.config.js     # Next.js yapılandırması
└── package.json       # Proje bağımlılıkları
```

## İçerik Ekleme ve Düzenleme

Dokümantasyon içeriği, `pages/` dizinindeki MDX dosyalarında bulunur. Yeni bir sayfa eklemek için, bu dizinde yeni bir MDX dosyası oluşturun ve `_meta.json` dosyasını güncelleyin.

### Markdown Özellikleri

Nextra, standart Markdown sözdiziminin yanı sıra aşağıdaki özellikleri de destekler:

- Kod blokları ve sözdizimi vurgulama
- Tablolar
- Adım adım rehberler
- Uyarı ve bilgi kutuları
- Sekmeler
- Resimler ve açıklamalar

Daha fazla bilgi için [Nextra dokümantasyonunu](https://nextra.site/docs) inceleyebilirsiniz.

## Dağıtım

Site, GitHub Actions kullanılarak otomatik olarak dağıtılır. `main` dalına yapılan her push, otomatik bir dağıtım tetikler.

Manuel dağıtım için:

```bash
npm run build
# veya
yarn build
```

Bu komut, `out/` dizininde statik HTML dosyaları oluşturur.

## Katkıda Bulunma

1. Bu repoyu forklayın
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## İletişim

Sorularınız veya önerileriniz için docs@lawlinkglobal.com adresine e-posta gönderebilirsiniz. 