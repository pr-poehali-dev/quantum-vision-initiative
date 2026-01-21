import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/4b07fc61-08c1-4c62-aaa0-7ec2623349e7.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/41335018-48f6-4490-bf8d-596fd8517022.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/0cec2330-bd43-4b36-979a-1df40cc20dbd.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/01633a59-2876-44d5-aed0-dc084af92ec6.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/7ef1c365-e10c-43d8-8752-c11ddcb493e2.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/9b8fd611-e713-4787-88f7-6cbffeec6392.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/99fd65ae-2abe-40de-8e9c-95bc43d2478b.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/14c03a3e-9316-4ef3-9184-b2f1f76ec2bc.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/a7ae14a6-cb76-48b2-ba88-bb790d682821.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/a036dbb2-1875-4c51-b7ba-a7e103d30f33.jpg",
    "https://cdn.poehali.dev/projects/86650f4a-5ed4-4270-bb02-8d4d6a1cf3de/files/2840ea4e-525a-49d7-aa34-20b8b3fa0666.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;