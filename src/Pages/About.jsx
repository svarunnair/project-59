import { Box, Link, Typography, styled } from '@mui/material';
import React from 'react'
import japan from "../Components/japan.mp4"
 



const OuterContainer = styled(Box)(({ theme }) => ({

 display:"flex",
 flexDirection:"column",
 justifyContent:"center",
 background:"#EEE8AA",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerDiv = styled(Box)(({ theme }) => ({

  display:"flex",
  justifyContent:"center",
  alignItems:"center",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const HeadText = styled(Typography)(({ theme }) => ({
  fontWeight:700,
  fontSize:35,
  color:"#4169E1",

 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const HeadTextTwo = styled(Typography)(({ theme }) => ({
  fontWeight:700,
  fontSize:45,
  color:"#FF0000",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const Image = styled(Box)(({ theme }) => ({
  width:"100%",

 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const WrapHead = styled(Box)(({ theme }) => ({
 
  position:"absolute",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const VideoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const SecondInnerDiv = styled(Box)(({ theme }) => ({
 
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  alignContent:"center",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
  fontFamily:"system-ui",
  textAlign:"left",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBoxHead = styled(Typography)(({ theme }) => ({
  fontWeight:600,
  fontSize:27,
  fontFamily:"cursive",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const WrapText = styled(Typography)(({ theme }) => ({

 width:"70%",
 padding:20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ImageBox = styled(Box)(({ theme }) => ({
  width:"30%",
  padding:20,
  cursor:"grab",
  ":hover":{
    transition:".5s",
    transform:"scale(1.1)"
  },
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     width:"80%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


function About({language}) {
  console.log("lng",language)
  return (
    <OuterContainer>

    <InnerDiv>
    <WrapHead>
    <HeadText>Let's feel the cultural smell of<HeadTextTwo>JAPAN</HeadTextTwo> </HeadText>
    </WrapHead>
    <Image as={"img"} src="https://www.internations.org/seo-assets/static/75df6fd48a90a389baf8765eca00a255/6e20c/Japan-expats.jpg"/>
    
    </InnerDiv>

<SecondInnerDiv>
{language?<WrapText>
    <TextBoxHead>日本の文化について聞いたことがありますか</TextBoxHead>
    <TextBox>日本の文化は数千年の間に大きく変わりましたが、
    先史時代の縄文時代から現代の現代文化まで、
    アジアや世界の他の地域からの影響。縄文時代以来、
     弥生と古墳はそれぞれ韓国と中国から日本に伝わり、日本文化を形作ってきました。
      稲作と中央集権的指導はこれらのグループによって導入され、日本文化を形成しました。
      中国の王朝、特に唐の時代は、歴史を通じて日本文化に影響を与えてきました。
      220 年間の鎖国を経て、明治時代は日本を西洋の影響に開放し、豊かさと多様性をもたらしました。
      日本の文化。ポップカルチャーは現代日本文化が世界にどれほど影響を与えているかを示しています</TextBox>
</WrapText>:

<WrapText>
    <TextBoxHead>Do you heard about Culture of Japan</TextBoxHead>
    <TextBox>The culture of Japan has changed greatly over the millennia, 
    from the country's prehistoric Jōmon period, to its contemporary modern culture, which absorbs 
    influences from Asia and other regions of the world.Since the Jomon period, ancestral groups like
     the Yayoi and Kofun, who arrived to Japan from Korea and China, respectively, have shaped Japanese culture.
      Rice cultivation and centralized leadership were introduced by these groups, shaping Japanese culture. 
      Chinese dynasties, particularly the Tang Dynasty, have influenced Japanese culture throughout history. 
      After 220 years of isolation, the Meiji era opened Japan to Western influences, enriching and diversifying 
      Japanese culture. Popular culture shows how much contemporary Japanese culture influences the world</TextBox>
</WrapText>}



<ImageBox as={"img"} src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000995/img/en/a0000995_parts_589d487e9f866.jpg?20200911184019&q=80&rw=686&rh=490"/>
</SecondInnerDiv>

<VideoBox>
<video style={{width:"100%"}} autoPlay muted loop src={japan}/>
</VideoBox>

<SecondInnerDiv>
<ImageBox as={"img"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lioB5DBN5WJ7PFLwTSmo2VQ2ZMpPdVMtQOND5RtmPQ&s"/>
{language?<WrapText>
    <TextBoxHead>影響</TextBoxHead>
    <TextBox>現代日本を観察する西洋人は、その経済の素晴らしさを強調するのが一般的である。
     文化的特質を平等に考慮せずに達成すること。それでいて日本文化
     独自性とそれが発展した方法は、それがどのようにして起こったかを理解する上で有益です。
     それは、日本が西洋以外では初めて大国の地位を獲得した国となったことです。先史時代の日本文化は、約 2000 年前から古代中国文化の影響にさらされてきました。これらの影響の結果の 1 つは、土地分割の格子制度の押し付けであり、それは長く存続しました。まだです
     このシステムの古代の地名とフィールドの分割線を追跡することができます。</TextBox>
  <Link href="https://www.cnbctv18.com/travel/the-cultural-impact-of-japans-industries-and-culture-around-the-world-15759371.htm" target="_blank" rel="noopener noreferrer">
      もっと詳しく知る
    </Link>
</WrapText>:
<WrapText>
    <TextBoxHead>Influence</TextBoxHead>
    <TextBox>It is common for Western observers of contemporary Japan to emphasize its great economic
     achievement without equal regard to cultural attributes. Yet Japanese cultural 
     distinctiveness and the manner in which it developed are instructive in understanding how it 
     is that Japan came to be the first non-Western country to attain great-power status.Prehistoric Japanese culture was exposed to ancient Chinese cultural influences beginning some two millennia ago. One consequence of these influences was the imposition of the gridiron system of land division, which long endured; it is stil
     l possible to trace the ancient place-names and field division lines of this system.</TextBox>
  <Link href="https://www.cnbctv18.com/travel/the-cultural-impact-of-japans-industries-and-culture-around-the-world-15759371.htm" target="_blank" rel="noopener noreferrer">
      Learn more
    </Link>
</WrapText>}

</SecondInnerDiv>

<SecondInnerDiv>

{language?<WrapText>
    <TextBoxHead>和食</TextBoxHead>
    <TextBox>日本料理（和食、和食）は、無限の種類の郷土料理や季節の料理を取り入れた豊かな美食を提供します。日本のレストランは、移動式の屋台から何世紀も続く料亭、雰囲気のある飲み屋、季節ごとに川の上に設置されるテラス、格安のチェーン店、忍者やロボットをテーマにしたユニークなレストランまで多岐にわたります。多くのレストランは 1 種類の料理に特化していますが、その他のレストランではさまざまな料理を提供しています。</TextBox>
<Link href="https://www.japan-guide.com/e/e620.html" target="_blank" rel="noopener noreferrer">
      
もっと詳しく知る
    </Link>
</WrapText>:
<WrapText>
    <TextBoxHead>Japanese Food</TextBoxHead>
    <TextBox>Japanese cuisine (washoku) offers an abundance of gastronomical delights with a boundless variety of regional and seasonal dishes. Restaurants in Japan range from mobile food stands to centuries old ryotei, atmospheric drinking places, seasonally erected terraces over rivers, cheap chain shops and unique theme restaurants about ninja and robots. Many restaurants are specialized in a single type of dish, while others offer a variety of dishes.</TextBox>
<Link href="https://www.japan-guide.com/e/e620.html" target="_blank" rel="noopener noreferrer">
      Learn more
    </Link>
</WrapText>}

<ImageBox as={"img"} src="https://www.maruha-nichiro.com/who_we_are/img/Japanese-food-culture_02.png"/>

</SecondInnerDiv>


<SecondInnerDiv>
<ImageBox as={"img"} src="https://att-japan.net/wp-content/uploads/2023/06/pixta_97309535_M.webp"/>
{language?<WrapText>
    <TextBoxHead>気候</TextBoxHead>
    <TextBox>日本には四季があり、北は亜寒帯から南は亜熱帯まで気候が異なります。太平洋側と日本海側では条件が異なります。

北日本は、夏は暖かく、冬は非常に寒く、日本海側や山間部では大雪が降ります。
東日本は、夏は高温多湿、冬は寒く、日本海側や山間部では大雪が降ります。
西日本は非常に高温多湿な夏（気温が 35℃以上に達することもあります）と適度に寒い冬があります。
沖縄と奄美は亜熱帯海洋性気候に属します。これらの地域では、夏は高温多湿（気温が 35 ℃以上になることはほとんどありません）、冬は穏やかです。</TextBox>
  <Link href="https://en.wikipedia.org/wiki/Climate_of_Japan" target="_blank" rel="noopener noreferrer">
      
もっと詳しく知る
    </Link>
</WrapText>:
<WrapText>
    <TextBoxHead>Climate</TextBoxHead>
    <TextBox>Japan has four distinct seasons with a climate ranging from subarctic in the north to subtropical in the south. Conditions are different between the Pacific side and the Sea of Japan side.

Northern Japan has warm summers and very cold winters with heavy snow on the Sea of Japan side and in mountainous areas.
Eastern Japan has hot and humid summers and cold winters with very heavy snow on the Sea of Japan side and in mountainous areas.
Western Japan has very hot and humid summers (with temperatures sometimes reaching 35 oC or above) and moderate cold winters.
Okinawa and Amami have a subtropical oceanic climate. These areas have hot and humid summers (with temperatures rarely reaching 35 oC or above) and mild winters.</TextBox>
  <Link href="https://en.wikipedia.org/wiki/Climate_of_Japan" target="_blank" rel="noopener noreferrer">
      Learn more
    </Link>
</WrapText>}

</SecondInnerDiv>


<SecondInnerDiv>

{language?<WrapText>
    <TextBoxHead>和食</TextBoxHead>
    <TextBox>日本では通常、2 種類の衣服が着用されます。1 つは日本の民族衣装である着物を含む和服として知られる伝統的な衣服、もう 1 つは民族衣装や着物として認識されていないその他すべてを含む西洋衣装 (洋服) です。他の国の衣装。

日本の伝統的なファッションは、平安時代に開発された色使い、唐の時代の服装や文化的伝統から取り入れたシルエット、日本文化、自然、伝統文学から取り入れたモチーフ、絹の種類の使用など、伝統文化の長い歴史を表しています。いくつかの衣服や服装スタイルは、主に江戸時代の終わりまでに完全に開発されました。</TextBox>
<Link href="https://www.japan-guide.com/e/e620.html" target="_blank" rel="noopener noreferrer">
      
もっと詳しく知る
    </Link>
</WrapText>:
<WrapText>
    <TextBoxHead>

Japanese clothes</TextBoxHead>
    <TextBox>There are typically two types of clothing worn in Japan: traditional clothing known as Japanese clothing (wafuku), including the national dress of Japan, the kimono, and Western clothing (yōfuku), which encompasses all else not recognised as either national dress or the dress of another country.

Traditional Japanese fashion represents a long-standing history of traditional culture, encompassing colour palettes developed in the Heian period, silhouettes adopted from Tang dynasty clothing and cultural traditions, motifs taken from Japanese culture, nature and traditional literature, the use of types of silk for some clothing, and styles of wearing primarily fully-developed by the end of the Edo period.</TextBox>
<Link href="https://www.japan-guide.com/e/e620.html" target="_blank" rel="noopener noreferrer">
      Learn more
    </Link>
</WrapText>}

<ImageBox as={"img"} src="https://blog.sakura.co/wp-content/uploads/2022/09/sakuraco_japanese-traditional-clothing-thumbnail.png"/>

</SecondInnerDiv>


    </OuterContainer>
  )
}

export default About