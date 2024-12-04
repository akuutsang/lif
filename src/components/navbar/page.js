import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/source-sans-pro"; // Defaults to weight 400.
import "@fontsource/source-sans-pro/700.css"; // Import specific weight.

function Navbar() {
  const navList = [
    { name: "Home", path: "/" },
    { name: "About Us", drop: true, path: "/MDAs/library" },
    { name: "Services", drop: false, path: "/MDAs/contact" },
    { name: "Our Team", drop: false, path: "/MDAs/contact" },
  ];

  const Card = [
    {
      title: "Crop Production",
      photo:
        "https://s3-alpha-sig.figma.com/img/de07/460a/83c9f9095f38268ca20775bd27b3c237?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ik3UwvtCHxa26I7lyXbEGslDhrKtLLht5NlxtPAaSwJZFkjwChUIyPBo1UU0nbQawJdA4OGfMCeuR7m0Yc-oR-VNBPyPr1uG~6obP16KVFowuD8XUlv3CNkzYwkOk~0G79RkJm2GuCut~tMgr4Nr6A0pnp3WQUUc27XL08Aa8kwH3sTIqMn-159kTRdK7nnoLCZXKt0y74H2u2DAwLwO91UA34CJ9Hm4naU1crS15fUzkSDlN~wH-baKYP2c5UidlscAlVcXHOFZrb0PZtiO~4fQU0dEtuQ0WZE9bVGEs6GI9WEUJmag6MrvpIHrDupa16yGAq2o8Kiq06nnGZVSCA__",
      text: "We grow high-quality maize, soybeans, millet, sorghum, and cotton using sustainable practices like drip irrigation to maximize yields and conserve water.",
    },
    {
      title: "Animal Welfare",
      photo:
        "https://s3-alpha-sig.figma.com/img/fc38/2c86/79e4582ba656645dd930b58ec3d322c6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1koP731XG1hpw6RQBmkKaV-hQi31SwePg-JzQSpgxMUiIGqmBjIEPodWsqBnzRj7YLZqE9PpseRilPyWYEvVLvQrWgT60DalVNg7uPAlE75tI30jDubMODP1Gl7CpK1QkxXf6oskB6TGv~DJrulfxAbjgb47G31HTqqy9jR2ueBSu7eGK5l7cC3VR2KX0l8i4G0fiLiufjyBuRJTd8fP70xxJa67XYPBC3QuxnCsdXBPeDwdJYrozYDQoWIBYhuZzYcPcdOABGsPLP8uLTbxL1vpOeIi8k0x1V4zv5ieU1I5pXlZOvdRIKIlM2lm~CP4b-TVTUKb5WkMN4veY~Qgg__",
      text: "We prioritize animal health, with strict welfare standards guided by the latest research and best practices for ethical treatment.",
    },

    {
      title: "Meat Processes",
      photo:
        "https://s3-alpha-sig.figma.com/img/1a3e/9570/6ff7c4dd1f1ac197a98b5180347181f4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YoWGWEG9fBiniOF8UopTtDRtXYaHRQye3Yu4e~epdvW5oveHUvYLkEPl0TG4ySbLhKxRUT0Z9QhRSPZTZL4kgWdZZCLNQ2PNQB4zL5zeAJDeDEgTIJ8pZdUITL1Maw2Kcel6kQ8WwewClhX92hs1Z89K5xtb-bAjr6vPackiih064fo5TeIwInO-4xGZYyfYUzGCapZw2b5GEeMVRC3zkd8hZSyoR~KDU1eHD3rsnbz9noJNvAueeYCDhNEXHtYn5qxyVxFgUb9ZftLr5xLQBNty-zGuo13yyvktR6odm8foNNErje0CjlkkYdoOYhA9cbR2wNU~wS79cOaWKwTMow__",
      text: "Our facilities provide fresh, safe, and ethically sourced meat products for local and international markets, maintaining strict quality standards.",
    },
    {
      title: "Supply and Distribution",
      photo:
        "https://s3-alpha-sig.figma.com/img/e3cf/ebc2/dac76cb8217e309f630ffc3480aa1824?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BCYnkW7nCtYPpZxcs7yWi-K5FWUyIfUeI08lBWvOb8VhTeo7GfF1ievmwMwVfPfhDCV5h3irV2gFX50NsH09CDtokBal2XPS~dAk3wWgAubjuigmuAPvwFc1VHpHr0ovTJ85xrhmajD6Zp4KfLNUl-o9FpVFdEsiH-7fJkWTpWMEHEkcKPvBILcCJwjChkf4~CSSxuhT2WXAlj8bEzrOFD-7yAXfMiGppq17ZtbbHhjiYk6Emo1KEa0AXY8WOU3KZJ7tdwmQoz9XrXuMFh68UOqWgPKNLMpzYPUCWFOUvGXEFCZy6QEv-rebA-gW2kkuzoxs69s3bY9CKMgmJcnEtA__",
      text: "Our efficient global supply chain delivers crops and products swiftly, partnering with local farmers to meet diverse customer needs.",
    },
    {
      title: "Food Safety",
      photo:
        "https://s3-alpha-sig.figma.com/img/dcf8/5f88/b2e478f486c54fdf5a183eb5a5e46543?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vy7z5NhN0CrcsvPz4v~Q1bUcZEOUStDnGzpoeShpr-RtU31Ve28-4pT1egx1Xu5icLoz22taBDIb5-2WChAyESHvIqh2D9xqOxsPGnChhIEFY3S2ZgV-EkUbXgo~viDy4Ks6A28vJiilHB14R~pSLebmNxM5~PilSFvNIETnyeXT8wQTm6VPaPnDQm4la~wUCJIdTOB8OjXC3r8gvZ1f96gRQsGOWuvqVdanZqf3utICQdqrn2t~-GGkgVCjzgNaOPusHgV~rk0ZEiUNChAX-tMabcuRFqjTVVeKTWcW79c0vfunPvL2bQu51bMLk8hxGk5s5tXnfTTRzgpXryFxRA__",
      text: "We ensure top-notch food safety with rigorous quality checks and traceability systems, guaranteeing the integrity and nutrition of our products.",
    },
    {
      title: "Agricultural Solution",
      photo:
        "https://s3-alpha-sig.figma.com/img/ca2c/be61/ce414f961ccb416ad8d481b1d9525483?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KK2sS6JluHq8smGPLcjxCL0wt4qkAdUTmdKElP8zsq9iMZMkh9GTSWBu6Pnb5NLM-zRCkWSIJsZW-DYCEcHGfPvzxrCh~pK0pf0kACsQLsf2JaSxi0jwfaguDWtgEYdw89sa5Tlvl0i20h5ad3l4P9Nb1uxU4lBo1jMg2EBp99oRVqE~m0kPmzENTlOr3WDSTkbCISom0PqQA9AEM0Ektf5mxYmzjQohZb3sxl6MzobZRis6kzOkriaAsLALS3lSsvhR3Mep8OmkAd1l6w0vi4UY-by14-GPECaEEUnZQE4EhH4fOYVXwY4uwkvXgPfu0EzHwVc6apEEmrrk7Z2i2Q__",
      text: "We offer training on modern farming techniques, climate adaptation, and risk management to boost productivity and sustainability.",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="p-[30px] h-[90px] bg-[#409844] flex justify-between items-center">
        <div>
          <Image src="/assets/Logo.png" alt="Logo" width={50} height={50} />
        </div>
        <div>
          <ul className="flex h-[44px] w-[496px] justify-between items-center">
            {navList.map((nav) => (
              <li key={nav.name} className="nav-item">
                <Link href={nav.path}>{nav.name}</Link>
                {nav.drop && <div className="round-dot" />}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="w-[158px] h-[50px] py-[22px] px-[13px] flex justify-center items-center text-[black] bg-[#F9DF02] rounded-[20px]">
            Contact
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="h-[850px] relative">
        <Image
          src="https://s3-alpha-sig.figma.com/img/7972/d53a/8ff7652518c242fddcdeaa8fa38ba564?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b6zEDsvLTNpQAsmUC3bi8T3kATu87s~Pwy85IXRS3Thfhf6QbG6al2h7KIyFHVhCzUyn2~jVu1Wf3SiLwijYt0AaL12OHyadumHZivUI58mNLnE1S1JSkh0~8-G8Gl8ZvfeVZ21vVHwSYR7jnBrXTS6qLXTzMeg-qBvcpX5-D-dq8WgDkIcARSJHAg9GfmzcvBIYNqbs9iDKi15jsnBWv7ZD9Aw1u6VHPCY7-0cBbu0m0mAHciGTrs9HoAGYBa7uosOYtRjR8GKP5tQAzhSDsRw50letnWaHDU6SdOAiP1DlpzT71e68XKBVLk7Er0kyIlN0hdUVcAc-xd63LR9wBA__"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 flex justify-start items-center text-white pt-[200px] pl-[150px]">
          <div className="bg-black/10 backdrop-blur-sm pt-8 w-[850px] mt-[50px] pl-[30px] rounded-[20px]">
            <h1 className="text-5xl mb-4 font-playfair">
              Sustainably Growing the Future
            </h1>
            <p className="font-sans mb-[20px] w-[600px]">
              We are committed to cultivating sustainable, high-quality crops
              and meat products to nourish communities locally and globally,
              while driving innovation and food security.
            </p>
            <button className="w-[250px] h-[50px] font-sans mb-[20px] text-black bg-[#F9DF02] rounded-[20px]">
              Get in touch with us
            </button>
          </div>
        </div>
      </div>

      <div className="h-[1048px] w-full flex flex-col justify-center bg-[#ECFDF5]">
        <div className="w-[1232px] h-[117px] pt-4 text-black flex flex-col justify-center items-center">
          <p className="font-semibold text-xl">Our Services</p>
          <p className="h-[64px] w-[800px] text-center">
            Explore LIF service options which is revolutionizing Agricultural
            practices and shaping the future of food production.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-[1100px] grid grid-cols-3 gap-8 px-20 items-center ">
            {Card.map((cards) => (
              <div
                key={cards.title}
                className="w-[300.67px] h-[405px] flex flex-col bg-white text-[#000000] rounded-[20px] justify-between p-5 gap-2"
              >
                <p className="text-[24px] font-semibold text-center">
                  {cards.title}
                </p>
                <div className="h-[200px] w-full">
                  <img
                    src={cards.photo}
                    alt={cards.title}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                <p className="font-sans text-center text-xs leading-[20.11px]">
                  {cards.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
