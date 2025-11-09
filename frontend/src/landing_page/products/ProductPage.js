import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iusto placeat culpa earum commodi recusandae ad sunt aspernatur impedit quam. Mollitia dolor, laudantium consequuntur nobis consequatur magnam cum. Consectetur, corporis!
                                neque dolores, amet possimus ipsam"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />


       <RightSection 
       imageUrl="media/images/console.png"
        productName="Console"
        productDescription="Lorem ipsum dolor elit. Sint iusto placeat culpa earum commodi recusandae ad sunt aspernatur impedit quam. Mollitia dolor, laudantium consequuntur nobis consequatur magnam cum. Consectetur, corporis!"
        />

      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iusto placeat culpa earum commodi recusandae ad sunt aspernatur impedit quam. Mollitia dolor, laudantium consequuntur nobis consequatur magnam cum. Consectetur, corporis!
                                neque dolores, amet possimus ipsam"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection 
        imageUrl="media/images/kiteconnect.png"
        productName="Kite connect API"
        productDescription="Lorem ipsum dolor elit. Sint iusto placeat culpa earum commodi recusandae ad sunt aspernatur impedit quam. Mollitia dolor, laudantium consequuntur nobis consequatur magnam cum. Consectetur, corporis!"
        />


      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iusto placeat culpa earum commodi recusandae ad sunt aspernatur impedit quam. Mollitia dolor, laudantium consequuntur nobis consequatur magnam cum. Consectetur, corporis!
                                neque dolores, amet possimus ipsam"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-5 mb-5">
         Want to know more about our technology stack? check out the stock broer.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
