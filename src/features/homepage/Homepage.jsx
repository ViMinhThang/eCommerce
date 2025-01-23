import React from 'react'
import NavLink from '../../components/NavLink'
import CarouselAd from '../../components/CarouselAd'
const Homepage = () => {


  let slides = [
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/4d002bbeaf23419f8bcd5a1c80ce102c_9366/Ao_Thun_Graphic_Tet_DJo_JZ4195_21_model.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/11f711667dfa4a77b94f64dd249daa5b_9366/Giay_Samba_OG_Hong_JI2682_01_00_standard.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/41fa7c30340f4b89a992a9ae32660665_9366/Mu_Luoi_Trai_Mau_xanh_da_troi_JI9463_01_00_standard.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/17816e00975340e39632f1c7a0630c37_9366/Ao_Thun_Graphic_Tet_DJen_JZ4197_21_model.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/6174f975ddd944d995548b3fc87dbe41_9366/Giay_Country_OG_trang_JI2868_01_00_standard.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/ee0fb4276f9c4ebc95018390c5417fa1_9366/Quan_Gia_Vay_Cotton_Color-Pop_Essentials_DJo_JG6211_21_model.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/20f3416278fa49628333001b1499dda0_9366/Ao_Tank_Top_Lung_Cotton_Color-Pop_Essentials_DJo_JG4181_21_model.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/2af476af3cce4c0dbd6acd1807faa4c8_9366/Quan_Jogger_Tet_DJen_JL8436_21_model.jpg',
  ]
  let AdSides = [
    'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Male_Teaser_Card_1_Tshirts_d_42565a8f8e.jpg',
    'https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/Teaser_Carousel_1050x1400_a9d3446f59.gif',
    'https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/ss25_adidas_equipment_launch_non_confirmed_catlp_tc_d_b51d923b14.gif',
    'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Female_Teaser_Card_1_Sports_Bras_d_897f5f19a0.jpg',
    'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Male_Teaser_Card_2_Shorts_d_e434436a59.jpg',
    'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Female_Teaser_Card_2_Leggings_d_ddc7286d4e.jpg',
    'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Female_Teaser_Card_3_Yoga_d_97f4f3165c.jpg',
    'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Training_SS_25_PPC_Global_Launch_GLP_Male_Teaser_Card_4_Hiit_d_5e1bdf8bad.jpg'
  ]
  return (
    <div>
      <div className='flex items-end bg-hero-pattern h-[855px]'>
        <div className='flex flex-col mx-10 mb-36 text-2xl'>
          <span className='bg-white p-2 font-bold border-b-2 border-black flex-initial w-56'>Lunar New Year</span>
          <p className='bg-white p-1 font-bold text-sm border-b-2 border-black flex-initial'>Slither into the new year with style in adidas' LNY collection 🐍</p>
          <NavLink className='bg-white mt-2 px-3 py-2 flex-initial w-48 flex justify-start items-center border-4 border-black'>
            SHOP NOW <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
          </NavLink>
        </div>
      </div>
      <div className='container mx-auto my-10'>
        <div className='flex justify-between items-center'>
          <ul className='flex space-x-5'>
            {['OPTIME', 'Predator', 'New Arrivals', 'LIBERTY LONDON'].map((item) => (
              <li key={item} className='border border-black px-3 py-2 text-sm font-medium'>
                {item}
              </li>
            ))}
          </ul>
          <NavLink className='border-b-4 border-black font-bold'>
            VIEW ALL
          </NavLink>
        </div>
        <div className='w-full mt-5'>
          <CarouselAd slides={slides} type="product" />
        </div>
        <div className='mt-5'>
          <h2 className='font-bold text-3xl'>WHAT'S HOT</h2>
          <CarouselAd slides={AdSides} type="advers" />
        </div>
      </div>
      <div className='mt-5 bg-black text-white p-5'>
        <div className='flex flex-col justify-center items-center text-center mx-auto max-w-[1600px] w-[1000px] space-y-5'>
          <p className='font-bold text-3xl mt-5'>STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</p>
          <p className='text-left'>Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB.adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to supportcreators. Improve their game. Their lives. And change the world.</p>
          <p className='text-left'>adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage