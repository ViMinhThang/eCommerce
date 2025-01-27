import React from "react";
import Banner from "../../components/Banner";
import ProductCarousel from "../../components/ProductCarousel";
import CarouselAd from "../../components/CarouselAd";
import DescriptionSection from "../../components/DescriptionSection";

const MenPage = () => {
  let slides = [
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/4d002bbeaf23419f8bcd5a1c80ce102c_9366/Ao_Thun_Graphic_Tet_DJo_JZ4195_21_model.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/11f711667dfa4a77b94f64dd249daa5b_9366/Giay_Samba_OG_Hong_JI2682_01_00_standard.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/41fa7c30340f4b89a992a9ae32660665_9366/Mu_Luoi_Trai_Mau_xanh_da_troi_JI9463_01_00_standard.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/17816e00975340e39632f1c7a0630c37_9366/Ao_Thun_Graphic_Tet_DJen_JZ4197_21_model.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/6174f975ddd944d995548b3fc87dbe41_9366/Giay_Country_OG_trang_JI2868_01_00_standard.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/ee0fb4276f9c4ebc95018390c5417fa1_9366/Quan_Gia_Vay_Cotton_Color-Pop_Essentials_DJo_JG6211_21_model.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/20f3416278fa49628333001b1499dda0_9366/Ao_Tank_Top_Lung_Cotton_Color-Pop_Essentials_DJo_JG4181_21_model.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/2af476af3cce4c0dbd6acd1807faa4c8_9366/Quan_Jogger_Tet_DJen_JL8436_21_model.jpg",
  ];
  let AdSides = [
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Male_Teaser_Card_1_Tshirts_d_42565a8f8e.jpg",
    "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/Teaser_Carousel_1050x1400_a9d3446f59.gif",
    "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/ss25_adidas_equipment_launch_non_confirmed_catlp_tc_d_b51d923b14.gif",
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Female_Teaser_Card_1_Sports_Bras_d_897f5f19a0.jpg",
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Male_Teaser_Card_2_Shorts_d_e434436a59.jpg",
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Female_Teaser_Card_2_Leggings_d_ddc7286d4e.jpg",
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Female_Teaser_Card_3_Yoga_d_97f4f3165c.jpg",
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Male_Teaser_Card_4_Hiit_d_5e1bdf8bad.jpg",
  ];
  return (
    <div>
      <Banner
        image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_optime_training_ss25_launch_mglp_banner_hero_d_32ed4e2f8b.jpg"
        h2="KHAI PHÁ SỨC MẠNH."
        p="Thách thức giới hạn bản thân với trang phục đáng tin cậy."
      />
      <ProductCarousel
        tags={["SPORTSWEAR", "TRAINING", "SAMBA,SPEZIAL&GAZELLE"]}
        images={slides}
      />
      <Banner
        image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_optime_training_ss25_launch_mglp_banner_hero_d_32ed4e2f8b.jpg"
        h2="KHAI PHÁ SỨC MẠNH."
        p="Thách thức giới hạn bản thân với trang phục đáng tin cậy."
      />
      <div className="container mx-auto mt-5">
        <h2 className="font-bold text-3xl">WHAT'S HOT</h2>
        <CarouselAd slides={AdSides} type="advers" />
      </div>
      <div className="mt-10 bg-white text-black p-5">
        <DescriptionSection
          title="ADIDAS MEN’S CLOTHING & SHOES"
          content={[
            "Our wins are ours to gain. adidas clothing & shoes don’t break our PB. We do. That extra mile. One more rep. Leg day, run away or lounge all day. Find something to match you. Jerseys for the player, or the fan. Running shoes to run on, or to walk in. Training gear for weekday practise, or Sunday chill. A pair of white trainers to go with… basically anything. All we need is us. All we want is here, in men’s apparel and footwear.",
          ]}
          className="w-[70%] leading-9"
        />
      </div>
    </div>
  );
};

export default MenPage;
