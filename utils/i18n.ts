import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fallbackLng = 'en';

const resources = {
  en: {
    translation: {
      // ---------- Bottom Tabs ----------
      // 100% Okay
      Crop: 'Crop',
      Favorite: 'Favorite',
      Notfavorite: 'Not a favorite',
      More: 'More',

      // ---------- Season Module ----------
      // 100% Okay
      Cool: 'Cool',
      Warm: 'Warm',
      Perennial: 'Perennial',

      // ---------- Crops Module ----------
      // 100% Okay
      All: 'All',
      Vegetable: 'Vegetable',
      Fruit: 'Fruit',
      Herb: 'Herb',
      Root: 'Root',

      Others: 'Others',
      cropNotFound: 'Crop not found',

      // ---------- Favorite Module ----------
      // 100% Okay
      noFavoritesYet: 'No favorites yet',

      // ---------- Settings Module ----------
      // 100% Okay
      theme: 'Theme',
      darkMode: 'Dark mode',
      language: 'Language',

      // ---------- Crop Info Module ----------
      // 100% Okay
      Tomato: 'Tomato',
      tomatoDescription:
        'The tomato plant can be erect with short stems or vine-like with long spreading stems that produce yellow flowers, which can develop into a cyme of 3-12 and usually a round fruit with smoothed skin that can be red, pink, purple, brown, orange, or yellow in color.',
      tomatoBenefits:
        'Tomatoes are rich in vitamin C and nutrients like potassium.',
      tomatoFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      tomatoUses: [
        'Tomatoes are commonly used fresh in salads, sandwiches, and as a topping for pizzas.',
        'Tomatoes can be eaten raw or cooked, and they are used in different dishes.',
        'Tomatoes can be processed into juice, ketchup, puree, paste, or powder.',
        'Tomatoes are also used in making dipping sauce, especially in the Philippines.',
      ],

      BitterMelon: 'Bitter Melon',
      bitterMelonDescription:
        'Bitter melon is a green-skinned vegetable with white to translucent flesh and a taste that fits its name.',
      bitterMelonBenefits: '',
      bitterMelonFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      bitterMelonUses: [
        'Bitter melon is usually cooked when it is green or slightly yellow.',
        'The young shoots and leaves of the bitter melon can also be eaten as greens.',
        'The fruit of the bitter melon is bitter when fresh and can be soaked in cold water to remove the bitter taste.',
      ],

      Pumpkin: 'Pumpkin',
      pumpkinDescription:
        'Pumpkins have bristled stems, large, deeply lobed leaves often containing white blotches, and yellow or orange flowers. The fruit is variable in shape and color but is often orange, white, cream, or green, containing about 70% flesh and several large white seeds.',
      pumpkinBenefits:
        'Pumpkin contains vitamin A, B9, C, and E and nutrients like fiber, iron, lutein, potassium, and zeaxanthin.',
      pumpkinFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      pumpkinUses: [
        'Pumpkin can be used to make pies, cakes, muffins, and other desserts.',
        'Pumpkin flesh, leaves, and flowers can be cooked and eaten in a variety of dishes.',
        'The seeds are also edible and are commonly roasted and eaten as a snack.',
      ],

      LadysFinger: "Lady's Finger",
      ladysFingerDescription:
        "Lady's finger plants have small, erect stems that can be bristly or hairless with heart-shaped leaves. The plant produces flowers with five white to yellow petals, which are 1.6-3.1 inches in diameter. The seed pod is a capsule up to 10 inches long, containing numerous seeds.",
      ladysFingerBenefits:
        "Lady's finger contains vitamin A, B6, B9, C, and K, as well as nutrients like fiber, magnesium, and polyphenol. It also helps strengthen bones, lower blood pressure, prevent constipation, and maintain healthy skin.",
      ladysFingerFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      ladysFingerUses: [
        "Lady's finger is used in soups such as sinigang, especially in the Philippines.",
      ],

      Lettuce: 'Lettuce',
      lettuceDescription:
        'The lettuce plant can vary in size, shape, and leaf type, but generally, the leaves of the plant form a dense head or loose rosette. Leaves can be smooth or curly and are usually green or red in color.',
      lettuceBenefits:
        'Lettuce contains vitamin A and C, as well as nutrients like calcium, iron, lutein, potassium, quercetin, and zeaxanthin.',
      lettuceFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      lettuceUses: [
        'Lettuce is primarily eaten raw as a salad green. Some varieties can be cooked and eaten as a vegetable.',
        'Lettuce provides a crisp base for various toppings and dressings.',
        'It is popular in Samgy, especially in the Philippines, and is used as a wrap for meat.',
      ],

      Cucumber: 'Cucumber',
      cucumberDescription:
        'The cucumber plant produces yellow flowers that are 1.6 inches in diameter. The cucumber fruit varies in shape but is generally a curved cylinder rounded at both ends that can reach up to 24 inches in length and 3.9 inches in diameter.',
      cucumberBenefits:
        'Cucumber contains vitamin A, B, C, and K, as well as nutrients like antioxidants, cucurbitacin, fiber, magnesium, manganese, and potassium.',
      cucumberFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      cucumberUses: [
        'Cucumbers are often sliced and used as a garnish for various dishes and skincare routines.',
      ],

      Moringa: 'Moringa',
      moringaDescription:
        'Moringa is a small to medium evergreen or deciduous tree. Its fruit is green in color when young and turns brown at maturity. The mature fruit splits open along each angle to expose the seeds.',
      moringaBenefits: '',
      moringaFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      moringaUses: [
        'Moringa leaves and pods are commonly used in cooking, both fresh and dried.',
        'The leaves are often added to soups.',
        'Dried moringa leaves are also powdered for nutritional supplements.',
      ],

      StringBean: 'String Bean',
      stringBeanDescription:
        'String beans, also known as green beans or snap beans, are widely recognized for their vibrant green color, crisp texture, and mild flavor. These slender and elongated pods are typically harvested while they are still young and tender, before the seeds inside fully develop.',
      stringBeanBenefits: '',
      stringBeanFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      stringBeanUses: [
        'In the Philippines, string beans are often an ingredient in traditional foods such as sinigang.',
      ],

      ChineseCabbage: 'Chinese Cabbage',
      chineseCabbageDescription:
        'The Chinese cabbage type is made up of about 30 individual leaves arranged into a loose, spiral head and is dark green and shiny. Its petioles are white or light green, thick, and fleshy.',
      chineseCabbageBenefits: '',
      chineseCabbageFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      chineseCabbageUses: [
        'The inner leaves of Chinese cabbage are eaten raw or cooked, while the tough outer leaves are often used in soups.',
        'It is a key ingredient in kimchi, a traditional Korean fermented dish.',
        'The leaves can be used fresh in salads for a crisp texture.',
      ],

      MustardGreen: 'Mustard Green',
      mustardGreenDescription:
        'The mustard plant is most well known for its tiny, yellow seeds that produce one of the most popular condiments.',
      mustardGreenBenefits: '',
      mustardGreenFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      mustardGreenUses: ['Mustard greens are used fresh in salads or soups.'],

      Chilli: 'Chili',
      chilliDescription:
        'Chili peppers are commonly grown for their fruits, which are used as spices. These perennial plants can be herbaceous or shrub-like, branching with green-brown stems and simple oval leaves.',
      chilliBenefits:
        'Chili peppers contains vitamin A, B6, and C, as well as nutrients like copper, iron, and potassium.',
      chilliFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      chilliUses: [
        'Chilies are commonly used, fresh or dried, to add spicy flavor to dishes.',
        'They are a key ingredient in many sauces, such as hot sauce and chili sauce.',
        'Chilies can be eaten fresh or cooked as a vegetable, seasoning, or garnish.',
      ],

      BottleGourd: 'Bottle Gourd',
      bottleGourdDescription:
        'Bottle gourd, also known as calabash gourd, features large vines with sizable white flowers that typically open at night. Its young fruits are hairy and usually light green, but they become smooth and turn beige or brown as they mature.',
      bottleGourdBenefits: '',
      bottleGourdFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      bottleGourdUses: [],

      LimaBean: 'Lima Bean',
      limaBeanDescription:
        'Lima bean, also commonly known as butter bean, is a green or light green flat bean. It is primarily used for the seeds, as the pods are often coarse or woody. There are two main varieties: a climbing or pole variety and a dwarf or bush variety, with the latter being commonly used in commercial canning.',
      limaBeanBenefits: '',
      limaBeanFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      limaBeanUses: [
        'Lima beans are commonly used in soups, stews, and casseroles.',
        'They can be mashed and seasoned as a side dish or used as a filling.',
        'Lima beans are also enjoyed because they provide rich protein.',
      ],

      WingedBean: 'Winged Bean',
      wingedBeanDescription:
        'The winged bean plant grows as a vine with climbing stems that are typically green but can also be purple. The bean pods may be smooth or rough, depending on the genotype, and their colors can range from cream and green to pink and purple. When fully ripe, the pods turn ash-brown and split open to release the seeds (beans).',
      wingedBeanBenefits: '',
      wingedBeanFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      wingedBeanUses: [
        'Winged bean leaves can be eaten like spinach, flowers can be used in salads, tubers can be eaten raw or cooked, and seeds can be used in similar ways as the soybean.',
      ],

      SpongeGourd: 'Sponge Gourd',
      spongeGourdDescription:
        'Sponge gourd is a dark green squash with ridges, known for its delicate flavor and soft texture.',
      spongeGourdBenefits: '',
      spongeGourdFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      spongeGourdUses: [
        'Sponge gourd is commonly used in soups.',
        'Mature sponge gourd can be dried and used as a natural sponge for cleaning and exfoliating the skin.',
      ],

      Chayote: 'Chayote',
      chayoteDescription:
        'The chayote is cultivated for its edible fruits. It is a fast-growing climbing vine with characteristic tendrils. Each fruit is approximately 7.5 to 10 cm long and contains one seed embedded in the green to green-white flesh.',
      chayoteBenefits: '',
      chayoteFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      chayoteUses: [],

      Eggplant: 'Eggplant',
      eggplantDescription:
        'The eggplant plant has a branching stem and is simple, long, and flat. coarsely lobed leaves, which are green in color and are arranged alternately on the branches. Its fruit is a large, fleshy, ovoid berry that can reach 15.7 inches in length, with glossy, smooth skin and numerous small seeds. The color of the fruit is variable and can be white, green, yellow, purple, or black.',
      eggplantBenefits:
        'Eggplant contains vitamin B1, B3, B6, B9, C, and K, as well as nutrients like antioxidants, copper, fiber, manganese, and potassium.',
      eggplantFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      eggplantUses: [
        'Eggplant is usually cooked before consumption and eaten as a vegetable. It is commonly grilled or fried and used in various dishes.',
      ],

      WaterSpinach: 'Water Spinach',
      waterSpinachDescription:
        'Water spinach grows in water or on moist soil. Its stems are 2-3 meters or longer, rooting at the nodes. The stems are hollow, allowing them to float. The leaves vary in shape from typically sagittate (arrowhead-shaped) to lanceolate, measuring 5-15 cm long and 2-8 cm broad. The flowers are trumpet-shaped, 3-5 cm in diameter, and usually white with a mauve center.',
      waterSpinachBenefits: '',
      waterSpinachFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      waterSpinachUses: [
        'Water spinach is used in soups such as sinigang, especially in the Philippines.',
      ],

      Spinach: 'Spinach',
      spinachDescription:
        'The spinach plant has simple leaves that stem from the center of the plant and measure about 0.8-12.0 inches long and 0.4-6.0 inches across. The leaves grow in a rosette and can appear crinkled or flat. The plant produces small yellow-green flowers that are 0.1 inches in diameter. The flowers produce small fruit clusters, which contain seeds.',
      spinachBenefits:
        'Spinach contains vitamin A, C, and K1, as well as nutrients like calcium, fiber, and iron.',
      spinachFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      spinachUses: [
        'Spinach is commonly used fresh in salads and sandwiches.',
        'Spinach is used in soups, stews, and casseroles.',
      ],

      BlackPepper: 'Black Pepper',
      blackPepperDescription:
        'Black pepper is a plant grown for its fruit, processed into black, white, and green peppercorns used in cooking. It has vine-like or bushy stems, simple leaves, and 50-150 spikes of flowers.',
      blackPepperBenefits:
        'Black pepper contain vitamins A, B, E, and K, as well as nutrients like copper, iron, and manganese for bone health, immunity, energy, and more.',
      blackPepperFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      blackPepperUses: [
        'Black pepper is commonly used as a seasoning in cooking.',
        'It enhances the flavor of a wide variety of dishes, from soups and stews to meats and vegetables.',
      ],

      Papaya: 'Papaya',
      papayaDescription:
        "Papaya is commonly cultivated for its small to large melon-like fruit. The papaya fruit is a large, fleshy berry with smooth green skin that turns yellow or orange when ripe. The fruit's flesh is thick and succulent, ranging in color from yellow to red or orange, and has many black, wrinkled seeds.",
      papayaBenefits:
        'The ripe fruits are high in vitamin C and A, which are frequently lacking in the diets of people living in the tropics.',
      papayaFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      papayaUses: [
        'Papaya is commonly eaten fresh as a sweet and nutritious fruit.',
        'Papaya can be blended to make juice and drinks.',
      ],

      Calamondin: 'Calamondin',
      calamondinDescription:
        'The calamondin tree is irregularly branched and possesses sharp spines. The tree produces small, cupped white flowers and yellowish-green fruit, which is round or egg-like in shape and can produce fruit for many years.',
      calamondinBenefits: '',
      calamondinFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      calamondinUses: [
        'Calamondins are commonly used in making dipping sauce.',
      ],

      Banana: 'Banana',
      bananaDescription:
        'Bananas are long, curved fruits with smooth, yellow, and sometimes slightly green skin. The skin of the banana is usually yellow when it is ripe, but it can also be green, red, or purple, depending on the variety.',
      bananaBenefits:
        'Bananas are a good source of vitamins and minerals, including vitamin C, vitamin B6, and potassium.',
      bananaFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      bananaUses: [
        'Bananas are often used as a healthy snack or ingredient in smoothies and other foods.',
        'The fruit is the most widely used part of the plant and can be eaten fresh, cooked, or processed into starch, chips, puree, beer, vinegar, or dehydrated to produce dried fruit.',
      ],

      Mango: 'Mango',
      mangoDescription:
        "Mango fruit is roughly oval in shape, with uneven sides. The fruit is a drupe, with an outer flesh surrounding a stone. The flesh is soft and yellow-orange in color. The fruit's skin ranges from yellow-green to red.",
      mangoBenefits:
        'Mango fruit is not only sweet but also has nutritional value, as it helps improve immunity and plays an important role in digestion. Mango fruit is low in calories and is the best choice when reducing calorie intake. Mangoes are mostly consumed as a fruit known as mangoes, which are highly rich in vitamins A, C, and D.',
      mangoFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      mangoUses: [
        'Mangoes are typically eaten fresh.',
        'They are used in fruit salads, smoothies, and desserts.',
      ],

      Guava: 'Guava',
      guavaDescription:
        'Guava produces solitary white flowers and a berry fruit. The fruit is oval in shape and green to yellow in color. The flesh inside can be white, yellow, pink, or red in color and contains numerous yellowish seeds.',
      guavaBenefits: '',
      guavaFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      guavaUses: [
        'Guava is commonly eaten fresh as a sweet and flavorful fruit.',
      ],

      Pineapple: 'Pineapple',
      pineappleDescription:
        'The pineapple plant has a short, stout stem and a rosette of sword-shaped leaves with needle-like tips. Individual fruits develop from the flowers and fuse to form one large cylindrical fruit topped by the crown. This fruit, known as a pineapple, has a tough rind made up of hexagonal units and fibrous, juicy flesh that may be yellow to white in color.',
      pineappleBenefits: '',
      pineappleFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      pineappleUses: [
        'Pineapple fruit is commonly eaten fresh, or it may be cooked in a variety of dishes.',
        'Pineapple may also be canned or used to produce juice.',
        'It is used in fruit salads, desserts, and as a topping for pizza, yogurt, and ice cream.',
      ],

      Avocado: 'Avocado',
      avocadoDescription:
        'The avocado tree is large and dome-shaped, with oval or elliptical leaves arranged in a spiral on the tips of branches. The fruits can be purple to green in color with smooth or warty skin, depending on the variety. The flesh of the fruit is yellow-green in color and has the consistency of butter. Each fruit contains one large seed.',
      avocadoBenefits:
        'Avocados are a source of vitamins B6, C, E, and K, as well as nutrients like magnesium and potassium.',
      avocadoFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      avocadoUses: [
        'Avocado is used in salads, sandwiches, and wraps for its creamy texture.',
      ],

      Pomelo: 'Pomelo',
      pomeloDescription:
        'The pomelo tree has a crooked trunk, irregular branches, winged leaf petioles, and fragrant flowers. The fruit is large, weighing 1-2 kilograms and has a thicker rind than a grapefruit. It has a mild flavor similar to grapefruit, with a slight bitterness. Some varieties contain numerous seeds.',
      pomeloBenefits: '',
      pomeloFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      pomeloUses: [
        'Pomelo segments are eaten fresh, often added to salads or eaten as a refreshing snack.',
      ],

      Coconut: 'Coconut',
      coconutDescription:
        'The coconut palm has a smooth, light gray stem with prominent leaf scars and 60-70 spirally arranged leaves. It has a drupe fruit with a single seed, is protected by a thick shell, and is partially filled with coconut water.',
      coconutBenefits: '',
      coconutFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      coconutUses: [
        'Coconuts are primarily cultivated for their oil. The oil is extracted from the endosperm and is used in cooking. Low-grade oils are used in the production of soaps.',
        'The endosperm can be consumed fresh or dry and is commonly grated for use in baking.',
        'Young coconuts, termed waternuts, are commonly sold in tropical resorts, where the liquid is drunk directly from the shell.',
        'Coconuts may also be used to produce coconut milk by squeezing the liquid from the grated endosperm.',
      ],

      PassionFruit: 'Passion Fruit',
      passionFruitDescription:
        'Passion fruits are round or oval and typically range in size from 1.5 to 3 inches in width. They can be yellow, red, purple, or green.',
      passionFruitBenefits: '',
      passionFruitFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      passionFruitUses: [
        'Passion fruit pulp is eaten fresh, often scooped out, and used in desserts or as a topping.',
      ],

      Soursop: 'Soursop',
      soursopDescription:
        'Soursop fruits grow on trees, large and oval-shaped. The green exterior, covered in spines, encases a white, fibrous flesh. The flavor of soursop is often described as a cross between mango and pineapple.',
      soursopBenefits: '',
      soursopFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      soursopUses: ['Soursop flesh is commonly eaten fresh.'],

      CottonFruit: 'Cotton Fruit',
      cottonFruitDescription:
        'There are two varieties of cotton fruit, previously considered two different species, the yellow variety and the red variety. The fruits are often the size, shape, and slightly fuzzy texture of peaches, with a reddish tinge. Both types have a skin that may be a thin peel to a thicker rind, according to the variety.',
      cottonFruitBenefits: '',
      cottonFruitFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      cottonFruitUses: [
        'Cotton fruit is a popular choice for snacking, cooking, and making refreshing beverages owing to its unique taste and numerous health benefits.',
      ],

      JavaPlum: 'Java Plum',
      javaPlumDescription:
        'Java plum, also known as Malabar plum, black plum, jamun, jaman, jambul, or jambolan, is an evergreen tropical tree belonging to the Myrtaceae family. It is valued for its fruit, timber, and ornamental qualities.',
      javaPlumBenefits: '',
      javaPlumFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      javaPlumUses: ['Java plum fruits are commonly eaten fresh.'],

      SugarApple: 'Sugar Apple',
      sugarAppleDescription:
        'Sugar apples are small trees with fragrant flowers and edible fruits. They are popular in home and edible gardens because they can produce fruit even when kept at a small size and require minimal maintenance.',
      sugarAppleBenefits: '',
      sugarAppleFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      sugarAppleUses: [
        'Sugar apple flesh is eaten fresh, scooped out, and consumed as a snack.',
      ],

      StarApple: 'Star Apple',
      starAppleDescription:
        'Star apple is cultivated for its edible fruit, which is similar in size and shape to an apple and named for its star-shaped core. The surface of the fruit is firm and smooth. The skin and flesh vary in color, ranging from white to purple, and the flesh is sweet and flavorful.',
      starAppleBenefits: '',
      starAppleFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      starAppleUses: ['Star apples are commonly eaten fresh.'],

      VelvetApple: 'Velvet Apple',
      velvetAppleDescription:
        'Velvet apple is cultivated for its edible fruit, which features a fine, velvety, reddish-brown, fur-like covering. The fruit has soft, creamy, pink flesh and a taste and aroma similar to peaches.',
      velvetAppleBenefits: '',
      velvetAppleFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      velvetAppleUses: ['Velvet apples are commonly eaten fresh.'],

      Bilimbi: 'Bilimbi',
      bilimbiDescription:
        'Bilimbi tree is a small tropical tree. The fruit is ellipsoidal and elongated, measuring about 4 to 10 cm, and sometimes has a faint 5-angled shape. The skin is smooth to slightly bumpy, thin, and waxy, changing from light green to yellowish-green as it ripens.',
      bilimbiBenefits: '',
      bilimbiFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      bilimbiUses: [
        'Bilimbi fruits are eaten fresh, often used in salads or pickled.',
        'They are used in Filipino cuisine for their sour flavor in dishes like sinigang.',
      ],

      SpanishPlum: 'Spanish Plum',
      spanishPlumDescription:
        'Spanish plums are small fruits, averaging 2 to 5 centimeters in diameter, with an elongated, round-to-oval shape. The skin is semi-smooth, thin, taut, and shiny, changing color from green to yellow or bright red as it ripens.',
      spanishPlumBenefits: '',
      spanishPlumFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      spanishPlumUses: [
        'Spanish plum fruits are eaten fresh and are often used in salads or desserts.',
      ],

      Tamarind: 'Tamarind',
      tamarindDescription:
        'The tamarind tree produces brown, pod-like fruits that contain a sweet and tangy pulp. This pulp is widely used in cuisines around the world.',
      tamarindBenefits: '',
      tamarindFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      tamarindUses: [
        'Filipinos commonly use tamarind because of its sour flavor in dishes like sinigang.',
      ],

      ManilaTamarind: 'Manila Tamarind',
      manilaTamarindDescription:
        'Manila tamarind has a short, stout, grayish trunk that bears low, irregular branches and forms a broad crown. Fruits are greenish-brown to red-pinkish, indehiscent pods. Pods are rather thin and set in a spiral of 1 to 3 whorls and contain flat, black, and shiny seeds.',
      manilaTamarindBenefits: '',
      manilaTamarindFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      manilaTamarindUses: [
        'The flesh surrounding the seed of the manila tamarind is commonly eaten fresh.',
      ],

      Basil: 'Basil',
      basilDescription:
        'The basil plant grows from a thick taproot and has silky green opposite oval leaves, which grow to be 1.2-4.3 inches long, branching out from the central stem. The plant produces small, white flowers that are clustered on a single spike at the top of the plant.',
      basilBenefits:
        'Essential oil can be extracted from the leaves and used in cosmetics, dental products, and perfume.',
      basilFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      basilUses: [
        'The leaves are used fresh or dried to flavor meats, fish, salads, and sauces.',
      ],

      Mint: 'Mint',
      mintDescription:
        'Mint plants are mainly aromatic perennials, and they possess erect, branching stems and oblong to ovate or lanceolate leaves arranged in opposing pairs on the stems. The leaves are often covered in tiny hairs and have a serrated margin. Mint plants produce a terminal flower spike, and the flowers can be white or purple in color, depending on the variety.',
      mintBenefits: '',
      mintFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      mintUses: [
        'Mint leaves are used, fresh or dried, to make teas, jams, and desserts.',
        'Essential oil can be extracted from the leaves and is used as a flavoring.',
      ],

      Oregano: 'Oregano',
      oreganoDescription:
        'Oregano plants can be woody or herbaceous and possess multiple branching stems. The leaves are oval or round and are arranged alternately on the stems. The plants produce small pink, purple, or white flowers and small, oval, brown fruits.',
      oreganoBenefits: '',
      oreganoFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      oreganoUses: [
        'The leaves of the oregano plant are used fresh or dried as an herb in cooking. They may also be dried and used to extract essential oils, which are used in soaps or as flavorings in wines and liqueurs.',
      ],

      Lemongrass: 'Lemongrass',
      lemongrassDescription:
        'The grass grows in dense clumps and has several stiff stems and slender blade-like leaves that droop towards the tips. The leaves are blue-green in color, turning red in the fall, and emit a strong lemon fragrance when damaged. Lemongrass produces large compound flowers on spikes when grown in the tropics.',
      lemongrassBenefits: '',
      lemongrassFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      lemongrassUses: [
        'The stalks (leaf bases) of the plant are commonly used to flavor dishes.',
        'The heart of young shoots may be cooked and consumed as a vegetable.',
        'The tougher leaves are used to flavor dishes but are typically removed before serving.',
        'Leaves may also be used to make lemon grass tea.',
        'The essential oil extracted from the leaves is commonly used in insect repellents, perfumes, and soaps.',
      ],

      ScrewPine: 'Screw Pine',
      screwPineDescription:
        'Screw pines vary in size from small shrubs to medium-sized trees, typically with a broad canopy, heavy fruit, and moderate growth rate. Mature plants can have branches. Depending on the species, the trunk can be smooth, rough, or warty. They commonly have many thick stilt roots near the base, which provide support as the tree grows top-heavy with leaves, fruit, and branches.',
      screwPineBenefits: '',
      screwPineFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      screwPineUses: [],

      Turmeric: 'Turmeric',
      turmericDescription:
        'Turmeric contains a chemical called curcumin, which might reduce swelling and has a warm and bitter taste.',
      turmericBenefits: '',
      turmericFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      turmericUses: [
        'Turmeric powder is commonly used as a coloring and flavoring, especially for curries.',
      ],

      Coriander: 'Coriander',
      corianderDescription:
        'The leaves of the plant are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. It is a soft, hairless plant. The flowers are produced in small umbels and are white or very pale pink in color, with the petals pointing away from the center of the umbel longer than those pointing towards it. The plant produces an oval-shaped fruit that is yellow-brown in color and contains two seeds.',
      corianderBenefits: '',
      corianderFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      corianderUses: [
        'All parts of the coriander plant are edible, but the fresh leaves and the dried seeds are most commonly used.',
        'Leaves and seeds are used fresh or dried as herbs in cooking.',
      ],

      Parsley: 'Parsley',
      parsleyDescription:
        'Parsley is an aromatic plant with an erect growth habit that possesses branched, hollow stems and dark green flat or curled leaves that are arranged alternately on the stems. The leaves form a rosette on younger plants. The plant produces small, yellow flowers on umbels.',
      parsleyBenefits: '',
      parsleyFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      parsleyUses: [
        'Parsley leaves are used fresh or dried as a culinary herb.',
        'Fresh leaves are also commonly used as a garnish.',
        'The taproot of some cultivars is edible and may be eaten as a vegetable.',
        'Essential oil can be extracted from the parsley flowers and is used as a flavoring.',
      ],

      Rosemary: 'Rosemary',
      rosemaryDescription:
        'The rosemary plant is usually erect in growth habit and possesses branched woody stems with tufts of leaves. The leaves are opposite and usually blade-like and glossy green. The plant produces clusters of 5-10 blue, purple, or pink flowers on short lateral branches and small oval fruit.',
      rosemaryBenefits: '',
      rosemaryFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      rosemaryUses: [
        'Rosemary leaves can be used fresh or dried as an herb in cooking or in salads.',
        'The leaves and flowers can be used to extract rosemary oil, which is used as a seasoning or as a scent in soaps and household products.',
      ],

      AloeVera: 'Aloe Vera',
      aloeVeraDescription:
        'The aloe vera plant has a short, stout stem and a rosette of fleshy, lanceolate leaves, which have a serrated margin of small white teeth. The leaves may be flecked with white and pale green or gray-green in color.',
      aloeVeraBenefits:
        'Aloe vera plants are grown for medicinal value, including improving digestion and boosting the immune system. They also contain vitamins A (beta-carotene), C, and E, which are antioxidants. It also contains vitamin B12 and folic acid.',
      aloeVeraFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      aloeVeraUses: [
        'The gel is also commonly used as a home remedy for the treatment of burns and to prevent constipation.',
        'The gel is used in desserts, yogurts, and beverages.',
        'It is also used as a skin and hair moisturizer.',
      ],

      SweetPotato: 'Sweet Potato',
      sweetPotatoDescription:
        'Sweet potato vines, known for their heart-shaped lobed leaves and charming white or lavender flowers, can stretch up to 13 feet in a single growing season. Tubers come in a fascinating array of shapes and colors, from red, yellow, brown, and white to even purple.',
      sweetPotatoBenefits:
        'Sweet potato contains vitamin A, B1, B3, B5, B6, and C, as well as nutrients like beta-carotene, carotenoid, copper, fiber, iron, manganese, phosphorus, potassium, and zinc.',
      sweetPotatoFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      sweetPotatoUses: [
        'Sweet potato tubers are consumed raw as a vegetable or processed into flour or starch.',
        'The leaves can be eaten raw or cooked.',
      ],

      Potato: 'Potato',
      potatoDescription:
        'The potato plant has a branched stem and leaves consisting of leaflets that are both unequal in size and shape and can be oval to oblong in shape. The leaves can reach up to 10-30 cm in length. Tubers grow about 25 cm underground in the soil and can be yellow, red, or purple, depending on the variety. The potato plant produces white or blue flowers and yellow-green berries.',
      potatoBenefits:
        'Potatoes contain vitamin B3, B6, B9, and C, as well as nutrients like calcium, carotenoid, fiber, flavonoid, magnesium, manganese, phenolic acid, phosphorus, and potassium.',
      potatoFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      potatoUses: [
        'Potatoes may be cut or sliced and made into potato chips or fries.',
        'Potatoes can also be processed into starch, alcohol, or flour.',
      ],

      Taro: 'Taro',
      taroDescription:
        'The taro plant does not flower often, as its main means of reproduction is asexual through corm production. The petioles of taro are long, and the leaves are large and heart-shaped, with colors ranging from green to purple.',
      taroBenefits: '',
      taroFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      taroUses: [],

      PurpleYam: 'Purple Yam',
      purpleYamDescription:
        'The tubers of purple yam are usually bright violet-purple to bright lavender in color, but some range in color from cream to plain white.',
      purpleYamBenefits: '',
      purpleYamFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      purpleYamUses: [
        'Purple yam is used to flavor ice creams, cakes, pastries, and traditional Filipino desserts like halo-halo.',
      ],

      Carrot: 'Carrot',
      carrotDescription:
        'The carrot plant produces a rosette of 8-12 leaves above ground and a fleshy conical taproot below ground. The plant produces small (2 mm) flowers that are white, red, or purple in color. The root can grow to between 2.0 and 20 inches long and reach 2.0 inches in diameter.',
      carrotBenefits:
        'Carrot contains vitamin A, B6, B7, C, and K1, as well as nutrients like beta-carotene, fiber, and potassium.',
      carrotFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      carrotUses: [
        'Carrot roots are eaten as a vegetable and can be consumed fresh or cooked.',
        'The leaves of the plant can be used as feed for animals.',
      ],

      Garlic: 'Garlic',
      garlicDescription:
        'Garlic is one of the most used crops among the cultivated Allium species. It is a perennial flowering plant that grows from a bulb that contains outer layers of thin, whitish sheaths or skin that enclose various lobes known as cloves. One garlic bulb may contain 10 to 20 edible cloves that are asymmetrical in shape, except for the small ones, which are close to the center. Cloves, which are also covered by protective whitish skin, have a distinctive smell.',
      garlicBenefits:
        'Garlic contains vitamin B6 and C, as well as nutrients like fiber, manganese, and selenium.',
      garlicFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      garlicUses: [
        'Garlic is primarily used for flavoring food and can be dried, ground, or powdered.',
        'Garlic is also used in marinades and rubs for meats, seafood, and vegetables.',
      ],

      Onion: 'Onion',
      onionDescription:
        'The onion plant produces pink or white flower clusters on its stalks. The bulbs are formed just above the flattened stem of the plant by overlapping leaves. The bulb is made up of layers, each of which corresponds to a leaf. They are generally oval, but their shape can vary, and they appear in clusters of 318 per plant. It is shielded by a membrane that transforms into a paper coat.',
      onionBenefits:
        'Onion contains vitamin B6 and C, as well as nutrients like antioxidants, copper, fiber, manganese, and potassium.',
      onionFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      onionUses: [
        'The bulb is an edible vegetable and is the most commonly used part of the onion. It is usually consumed after cooking, although it can be eaten fresh.',
      ],

      Radish: 'Radish',
      radishDescription:
        'The radish plant has a short, hairy stem and a rosette (ground-level, horizontal, and circular leaves) of oblong-shaped leaves that measure 2-12 inches in length. The top leaves of the plant are smaller and lance-like. The taproot of the plant is cylindrical or tapering and commonly red or white in color. The radish plant produces multiple purple or pink flowers on racemes, which produce 2-12 seeds.',
      radishBenefits:
        'Radish contains vitamin B1, B2, B3, B6, B9, C, and K, as well as nutrients like iron, manganese, and potassium.',
      radishFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      radishUses: [
        'The radish root can be eaten fresh in salads or cooked with other ingredients, such as meat.',
        'The leaves of the plant are also edible and can be used as a salad green.',
      ],

      Jicama: 'Jicama',
      jicamaDescription:
        'Jicamas possess erect stems and 8-12 leaves forming a crown. The leaves are light green in color, hairy, and thin. The plant produces light yellow flowers, which are clustered at the top of a raceme and are often extended above the terminal buds. The leaves can reach 12-14 inches in length, while the branching flower stems can reach 12-36 inches. The taproot of the plant is a bulbous tuber, almost perfectly round, which is usually a mixture of purple, white, and yellow.',
      jicamaBenefits: '',
      jicamaFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      jicamaUses: [
        'Jicama are eaten as a vegetable after cooking.',
        'The shoots and leaves can be eaten fresh in salads, or the entire plant can be used as forage for livestock.',
      ],

      Ginger: 'Ginger',
      gingerDescription:
        'The rhizome of ginger is brown, with a corky outer layer and a pale-yellow-scented center. The above-ground shoot is erect and reed-like, with linear leaves that are arranged alternately on the stem. The shoots originate from multiple bases and wrap around one another. The leaves can reach 2.75 inches in length and 0.7 inches broad. Flowering heads are borne on shorter stems, and the plant produces cone-shaped, pale yellow flowers.',
      gingerBenefits: '',
      gingerFertilizers: [
        'Chicken manure',
        'Horse manure',
        'Cow manure',
        'Goat/Sheep manure',
        'Rabbit manure',
      ],
      gingerUses: [
        'Ginger is popularly used as a spice in cooking and can be used either fresh, dried, or powdered.',
        'The fresh rhizome can be used to extract ginger essential oil.',
        'Ginger may also be used to flavor beverages.',
      ],

      // 100% Okay
      Spacing: 'Spacing',
      Depth: 'Depth',
      seed: 'seed',
      seeds: 'seeds',
      Seedperpit: 'Seed per pit',
      Height: 'Height',
      Water: 'Water',
      Sun: 'Sun',
      Season: 'Season',
      Germination: 'Germination',
      Sprouttoharvest: 'Sprout to harvest',
      Trellis: 'Trellis',
      Fullsun: 'Full sun',
      Shade: 'Shade',
      week: 'week',
      days: 'days',

      // 100% Okay
      spacingDesc:
        'If growing from seed, the {{cropName}} seeds must be {{cropSpacing}} spaced in rows.',
      depthDesc:
        'Ensure that {{cropName}} seeds receive enough moisture to germinate by planting them at a depth of {{cropDepth}} in the soil.',
      seedPerPit:
        'Direct seeding of {{cropSeedPerPit}} per pit is commonly practiced.',
      waterDesc:
        'The {{cropName}} needs {{cropWater}} of water per week, depending on the weather.',
      perennialSeasonDesc:
        'The {{cropName}} will grow perennially and come back year after year.',
      seasonDesc: 'The {{cropName}} will grow well in {{cropSeason}} weather.',
      sunDesc: '{{cropSun}} is good for {{cropName}} plants.',
      trellisDesc:
        'Trellis should be at least {{cropTrellis}} high to support the {{cropName}} plant.',
      heightDesc:
        'The {{cropName}} plants can grow up to {{cropHeight}} in height.',
      germinationDesc:
        'It usually takes {{cropGermination}} before {{cropName}} seeds germinate after planting.',
      sproutToHarvestDesc:
        'After germination, it generally takes about {{cropSproutToHarvest}} for a {{cropName}} to be ready for harvest.',

      inch: 'inch',
      inches: 'inches',

      // 100% Okay
      quickInfo: 'Quick Info',
      fertilizers: 'Fertilizers',
      uses: 'Uses',
      Pests: 'Pests',
      Diseases: 'Diseases',
      Beneficial: 'Beneficial',
      noSpeciesFoundForThisCrop: 'No {{species}} found for this crop',
      noBenefitsFound: 'No benefits found for this crop',
      noUsesFound: 'No uses found for this crop',

      // ---------- Species Info Module ----------
      Aphids: 'Aphid',
      BeanPodBorer: 'Bean Pod Borer',
      BeetArmyworm: 'Beet Armyworm',
      ChineseRoseBeetle: 'Chinese Rose Beetle',
      ColoradoPotatoBeetle: 'Colorado Potato Beetle',
      CornEarworm: 'Corn Earworm',
      CucumberBeetles: 'Cucumber Beetle',
      Cutworms: 'Cutworm',
      DiamondbackMoth: 'Diamondback Moth',
      FleaBeetles: 'Flea Beetle',
      Grasshoppers: 'Grasshopper',
      Hornworms: 'Hornworm',
      JapaneseBeetle: 'Japanese Beetle',
      LargeCabbageWhite: 'Large White',
      Leafhopper: 'Leafhopper',
      Leafminers: 'Leafminer',
      Leafroller: 'Leafroller',
      Loopers: 'Looper',
      Maggot: 'Maggot',
      Mealybugs: 'Mealybug',
      MexicanBeetle: 'Mexican Bean Beetle',
      PepperLaceBug: 'Pepper Lace Bug',
      PerseaMites: 'Persea Mite',
      RhinocerosBeetle: 'Rhinoceros Beetle',
      RustFly: 'Carrot Rust Fly',
      ScaleInsects: 'Scale Insect',
      Skipper: 'Skipper',
      Slugsandsnails: 'Slugs and snails',
      SpiderMites: 'Spider Mite',
      SpinachCrownMite: 'Spinach Crown Mite',
      SpottedLadyBeetle: 'Spotted Lady Beetle',
      SquashBug: 'Squash Bug',
      SquashVineBorer: 'Squash Vine Borer',
      Stinkbugs: 'Stink Bug',
      Thrips: 'Thrip',
      TreeBorer: 'Tree Borer',
      Weevil: 'Weevil',
      Whiteflies: 'Whitefly',
      WhiteGrub: 'White Grub',
      Wireworms: 'Wireworm',

      AlternariaLeafSpot: 'Alternaria leaf spot',
      AngularLeafSpot: 'Angular Leaf Spot',
      Anthracnose: 'Anthracnose',
      BacterialCanker: 'Bacterial Canker',
      BacterialLeafSpot: 'Bacterial leaf spot',
      BacterialRingRot: 'Bacterial Ring Rot',
      BacterialSpot: 'Bacterial Spot',
      BlackRot: 'Black Rot',
      BlackSigatoka: 'Black Sigatoka',
      BlackSpot: 'Black Spot',
      BlossomEndRot: 'Blossom-end Rot',
      BuckeyeRot: 'Buckeye Rot',
      CercosporaLeafBlight: 'Cercospora Leaf Blight',
      CercosporaLeafSpot: 'Cercospora leaf spot',
      CigarEndRot: 'Cigar End Rot',
      Clubroot: 'Clubroot',
      CottonyRot: 'Cottony Rot',
      DampingOff: 'Damping-off',
      DownyMildew: 'Downy Mildew',
      EarlyBlight: 'Early Blight',
      FusariumWilt: 'Fusarium Wilt',
      GrayLeafBlight: 'Gray Leaf Blight',
      GrayMold: 'Gray Mold',
      GummyStemBlight: 'Gummy Stem Blight',
      LateBlight: 'Late Blight',
      MosaicVirus: 'Mosaic Virus',
      PhytophthoraBlight: 'Phytophthora Blight',
      PhytophthoraFruitRot: 'Phytophthora fruit rot',
      PowderyMildew: 'Powdery Mildew',
      PythiumFruitRot: 'Pythium fruit rot',
      RootKnotNematode: 'Root Knot Nematode',
      RootRot: 'Root Rot',
      Rust: 'Rust',
      SootyMold: 'Sooty Mold',
      Sunblotch: 'Sunblotch',
      TomatoSpottedWilt: 'Tomato Spotted Wilt',
      VerticilliumWilt: 'Verticillium Wilt',
      WhiteMold: 'White Mold',

      AssassinBugs: 'Assassin Bug',
      Bees: 'Bee',
      Birds: 'Bird',
      Butterflies: 'Butterfly',
      Earthworms: 'Earthworm',
      Flies: 'Fly',
      GroundBeetles: 'Ground beetle',
      Lacewings: 'Lacewing',
      Ladybugs: 'Ladybug',
      Spiders: 'Spider',
      Wasps: 'Wasp',

      // 100% Okay
      aphidsIdentification:
        'Adult aphids are small, pear-shaped insects that can be green, black, brown, or pink in color and are commonly found on plant leaves. Their nymphs are smaller and wingless.',
      armywormIdentification:
        'Armyworm caterpillars can be green or brown with stripes on their bodies. Adults are moths with a wingspan of 1.5 to 2 inches and brown wings with black spots.',
      beanPodBorerIdentification:
        'Bean pod borer caterpillars can be creamy white or pink and are usually found inside bean pods. Adults are moths with about a 1-inch wingspan and brown and gray wings.',
      beetArmywormIdentification:
        'Beet armyworm caterpillars can be green or brown with stripes on the body. Adults are moths with a 1.5-inch wingspan, brown with light-colored stripes.',
      chineseRoseBeetleIdentification:
        'Adult Chinese rose beetles are small to medium-sized and can be dark brown or reddish-brown. Their larvae are white and become C-shaped when disturbed; they are typically found underground.',
      coloradoPotatoBeetleIdentification:
        'Adult Colorado potato beetles are rounded beetles with yellow and black stripes on their wing covers, about 0.5 inches long. Their larvae can be orange or reddish with black spots.',
      cornEarwormIdentification:
        'Adult corn earworms are moths with yellow or brownish wings with stripes. Their larvae can be green, brown, or pinkish and are usually found inside corn ears.',
      cucumberBeetlesIdentification:
        'Adult cucumber beetles are small, oval-shaped beetles that can be green or yellow with black spots or stripes. Their larvae are white, worm-like, rarely seen, and found underground.',
      cutwormsIdentification:
        'Cutworm caterpillars can be gray or brown, have patterns, and become C-shaped when disturbed. Adults are moths with about a 1.5-inch wingspan, usually brown or gray with patterns.',
      diamondbackMothIdentification:
        'Diamondback moths are small, with about a 0.5-inch wingspan, and have diamond-shaped patterns on their wings. Their larvae are small caterpillars that can be green or yellow with diamond-shaped markings on their backs.',
      fleaBeetlesIdentification:
        'Adult flea beetles are small, jump when disturbed, and have a shiny black or metallic color about 0.1 inches long. Their larvae are white, worm-like, and usually found on plant stems or roots.',
      grasshoppersIdentification:
        'Adult grasshoppers are large insects with long hind legs used for jumping and can be green or brown. Their nymphs are smaller versions of adults and are wingless.',
      hornwormsIdentification:
        'Hornworm caterpillars are large and green, with horn-like projections on their rear. Adults are moths with about a 4-inch wingspan, typically green with brown or gray patterns.',
      japaneseBeetleIdentification:
        'Adult Japanese beetles are metallic green with coppery-brown wings about 0.5 inches long. Their larvae are white and become C-shaped when disturbed, with a brown head.',
      largeCabbageWhiteIdentification:
        'Adult large cabbage whites are white butterflies with black spots on their wings; males have one black spot, while females have two. Their larvae are green caterpillars with small yellow and black spots.',
      leafhopperIdentification:
        'Adult leafhoppers are small, wedge-shaped insects that can be green, yellow, or brown with large hind legs. Their nymphs are wingless and pale green.',
      leafminersIdentification:
        'Adult leafminers are small, fly-like insects with shiny colors. Their larvae are small and maggot-like.',
      leafrollerIdentification:
        'Leafroller caterpillars are small and can be green, brown, or pinkish. Adults are moths with a 0.5- to 1-inch wingspan, usually brown or gray with folded wings.',
      loopersIdentification:
        'Looper caterpillars move in a looping fashion as they crawl. Adults are moths with about a 1.5-inch wingspan and have patterns.',
      maggotIdentification:
        'Maggot larvae are small, white, and worm-like. Adults are flies with various appearances, usually grayish.',
      mealybugsIdentification:
        'Adult mealybugs are small, white insects commonly found on plant stems and leaves. Their nymphs are smaller compared to adults.',
      mexicanBeetleIdentification:
        'Adult Mexican beetles are rounded beetles with an orange-yellow color and black spots, about 0.3 inches long. Their larvae can be orange or red with black spots.',
      pepperLaceBugIdentification:
        'Adult pepper lace bugs are small, reddish-brown insects with lace-like wings. Their nymphs are small, wingless insects that are also reddish-brown.',
      perseaMitesIdentification:
        'Nymphs of persea mites are small, oval-shaped mites, often reddish or orange. Adults are larger compared to nymphs.',
      rhinocerosBeetleIdentification:
        'Adult rhinoceros beetles are large with a horn on their heads, usually black or dark brown. Their larvae are large, white, and become C-shaped when disturbed, with a brown head.',
      rustFlyIdentification:
        'Adult carrot rust flies are small, reddish-brown flies. Their larvae are small, white maggots commonly found inside plant tissues.',
      scaleInsectsIdentification:
        'Adult scale insects are small, immobile insects with a hard shell, usually found on plant stems. Their nymphs are smaller and shell-less.',
      skipperIdentification:
        'Adult skippers are moths that are stout-bodied, fast-flying, and come in various colors and patterns. Their larvae are caterpillars that can be green or brown.',
      slugsAndSnailsIdentification:
        "Slugs and snails are soft-bodied, land-dwelling mollusks that can be gray, black, orange, brown, or tan. Slugs don't have shells, while snails do, and both leave slime trails.",
      spiderMitesIdentification:
        'Adult spider mites are very small, have eight legs, can be red or green, and are commonly found on the underside of plant leaves. Their nymphs are smaller compared to adults.',
      spinachCrownMiteIdentification:
        'Adult spinach crown mites are very small, oval-shaped mites, usually reddish or orange. Their nymphs are smaller compared to adults.',
      squashBugIdentification:
        'Adult squash bugs can be brown or grayish with a shield-shaped body about 0.75 inches long. Their nymphs are smaller and can be green, brown, or wingless.',
      squashVineBorerIdentification:
        'Squash vine borer larvae are white, worm-like, with a brown head, and are commonly found inside squash stems. Adults are moths with about a 1.5-inch wingspan and have orange and black stripes on their abdomen.',
      stinkbugsIdentification:
        'Adult stink bugs are shield-shaped insects that can be green, brown, or gray and release a foul odor when disturbed. Their nymphs are small and wingless.',
      thripsIdentification:
        'Adult thrips are very small, slender insects with fringed wings, usually yellow, brown, or black. Their nymphs are smaller and wingless.',
      treeBorerIdentification:
        'Tree borer larvae can be white or wire-like in color, and are commonly found inside wood. Adults are beetles with cylindrical or elongated bodies, usually brown or black.',
      weevilIdentification:
        'Adult weevils are small beetles with long, hard snouts, usually brown or black. Their larvae are white, become C-shaped when disturbed, and feed inside plant tissues or seeds.',
      whitefliesIdentification:
        'Adult whiteflies are small, white, winged insects, usually found on the undersides of leaves.',
      whiteGrubIdentification:
        'White grub larvae are white and become C-shaped when disturbed. They are commonly found underground. Adults are beetles that can be brown or reddish.',
      wirewormsIdentification:
        'Wireworm larvae are slender and can be white or yellow. They are commonly found in plant roots and tubers. Adults are beetles with hard and usually shiny bodies.',

      // 100% Okay
      aphidsDamage:
        'They suck the sap from plants, causing redness and curling of the leaves. They also leave a sticky substance called honeydew that attracts black mold and ants.',
      armywormDamage:
        'Armyworm caterpillars chew on the leaves, stems, and fruits of plants, which can cause significant damage.',
      beanPodBorerDamage:
        'Bean pod borer caterpillars create holes in beans and enter through these holes to eat and destroy the seeds inside.',
      beetArmywormDamage:
        'Beet armyworm caterpillars chew on the leaves, stems, and flowers of plants, which can cause significant damage, especially to young plants, and they can defoliate your crops.',
      chineseRoseBeetleDamage:
        "Adult Chinese rose beetles feed on leaves, causing irregular holes and leaf drop, while their larvae feed on roots, causing root damage and weakening the plant's health.",
      coloradoPotatoBeetleDamage:
        'Adult Colorado potato beetles and their larvae feed on leaves, causing irregular holes, severe leaf drop, and weakening of plant health.',
      cornEarwormDamage: '',
      cucumberBeetlesDamage:
        'Adult cucumber beetles feed on leaves, flowers, and fruits, causing the wilting of plants. They can also transmit diseases such as bacterial wilt and mosaic virus.',
      cutwormsDamage:
        'Cutworm caterpillars cut young seedlings at the soil level, causing death and a reduction in plant numbers, especially for transplanted crops.',
      diamondbackMothDamage:
        'Diamondback moths and their larvae feed on leaves, causing small holes and tissue damage to the plants.',
      fleaBeetlesDamage:
        'Adult flea beetles and their larvae feed on leaves, causing small holes and potentially weakening plants, especially young plants.',
      grasshoppersDamage:
        'Adult grasshoppers and their nymphs feed on leaves, stems, and fruits, causing severe leaf drop and damage.',
      hornwormsDamage:
        "Hornworm caterpillars can defoliate your plant's leaves, potentially causing damage to its fruits.",
      japaneseBeetleDamage:
        'Adult Japanese beetles feed on the leaves, flowers, and fruits of various plants, leaving behind skeletonized leaves that cause significant damage.',
      largeCabbageWhiteDamage:
        'Large cabbage white caterpillars feed on leaves, causing leaf drop, stunted growth, and leaving frass (caterpillar droppings) that can damage plants.',
      leafhopperDamage:
        'Adult leafhoppers and their nymphs suck the sap from plants, causing stippling, yellowing, curling, and leaf drop. They can also transmit diseases such as aster yellows and the curly top virus.',
      leafminersDamage:
        'Adult leafminers lay their eggs on leaves, and their larvae feed between leaf layers, causing telltale squiggly tunnels, lines, and leaf spots.',
      leafrollerDamage:
        'Leafroller caterpillars twist the leaves into a round shape, causing leaf drop and plant damage.',
      loopersDamage:
        "Looper caterpillars create holes in leaves, reducing the plant's ability to photosynthesize and grow.",
      maggotDamage:
        'Maggot larvae feed on the roots, stems, and fruits of plants, causing decay, secondary infections, and reduced plant vigor.',
      mealybugsDamage:
        'They suck the sap from plants, causing redness and stunted growth. They also leave honeydew that attracts black mold and ants.',
      mexicanBeetleDamage:
        'Adult Mexican beetles and their larvae feed on bean leaves. Adults create small, round holes, while their larvae feed on the undersides of leaves, leaving a lacy or skeletonized appearance.',
      pepperLaceBugDamage:
        'Adult pepper lace bugs feed on the undersides of leaves, causing small dots, redness, leaf drop, and reduced plant vigor.',
      perseaMitesDamage:
        'They feed on the undersides of avocado leaves, causing small dots, a tan color, and leaf drops.',
      rhinocerosBeetleDamage:
        'Adult rhinoceros beetles bore into various trees, causing reduced growth and potential tree death. Their larvae are often found inside the tree.',
      rustFlyDamage:
        'Carrot rust fly larvae feed on carrot roots and other plants, causing tunnels and secondary infections.',
      scaleInsectsDamage:
        'They suck the sap from plants, causing redness, stunted growth, branch dieback, and leaving honeydew that attracts black mold.',
      skipperDamage:
        'Adult skippers and their larvae feed on leaves, causing irregular holes, tearing, and reduced plant growth.',
      slugsAndSnailsDamage:
        'Slugs and snails feed on leaves, stems, and fruits, causing irregular holes and leaving a slimy residue.',
      spiderMitesDamage:
        'They suck the sap from plants, causing small dots, a tan color, and leaf drops.',
      spinachCrownMiteDamage:
        'They feed on the growing parts of spinach, causing stunted growth and distorted leaves.',
      squashBugDamage:
        'Adult squash bugs and their nymphs suck the sap from plants, causing wilting, redness, leaf drop, and often resulting in plant death.',
      squashVineBorerDamage:
        'Adult squash vine borers lay eggs at the base of plants. Their larvae bore into stems, causing internal damage, wilting, collapse, and reduced growth.',
      stinkbugsDamage:
        'Adult stink bugs feed on fruits and leaves, causing blemishes and deformities, while their larvae also feed on plant parts, leading to stippling, leaf drop, and additional plant stress.',
      thripsDamage:
        'They feed on flowers, leaves, and fruits, causing small spots, silvering, and scarring, and also spreading diseases.',
      treeBorerDamage:
        'They bore into trunks and branches, causing structural damage, reduced vigor, and potential tree death if the infestation is severe.',
      weevilDamage:
        'They feed on various plant parts, causing damage to roots, stems, leaves, and seeds, reducing plant growth.',
      whitefliesDamage:
        'They suck the sap from plants, causing yellowing leaves, wilting, stunted growth, and leaf drop.',
      whiteGrubDamage:
        'White grub larvae feed on the roots of grasses and plants, causing wilting, redness, and plant death.',
      wirewormsDamage:
        'Wireworm larvae feed on seeds, roots, and tubers, causing reduced growth and significant damage, especially to root crops.',

      // 100% Okay
      aphidsPC:
        'Spray the plants with a strong stream of water to remove the aphids, or manually remove them with your hands, and use reflective mulches to repel them.',
      armywormPC:
        'Manually remove and kill the caterpillars, use row covers to cover and protect the plants, and plow the soil to break their life cycle.',
      beanPodBorerPC:
        'Manually remove and kill the larvae, remove and discard the affected pods, or use pheromone traps to catch the adults.',
      beetArmywormPC:
        'Manually remove and kill the caterpillars, use row covers to cover and protect the plants, and remove surrounding weeds that may act as hosts.',
      chineseRoseBeetlePC:
        'Manually remove and kill the beetles, use light traps to attract and catch them, and use row covers to cover and protect the plants.',
      coloradoPotatoBeetlePC:
        'Manually remove and kill the beetles and their larvae, and use floating row covers for additional protection of the plants.',
      cornEarwormPC:
        'Manually remove and kill corn earworm larvae, use row covers to protect the plants, and set up pheromone traps to catch the moths.',
      cucumberBeetlesPC:
        'Use row covers to protect the plants, manually remove the beetles, and place sticky traps to catch them.',
      cutwormsPC:
        'Place collars around seedlings, remove debris where they hide, and plow the soil before planting to kill the caterpillars.',
      diamondbackMothPC:
        'Manually remove and kill the larvae, use row covers to cover and protect the plants, and remove leftover plants after harvesting.',
      fleaBeetlesPC:
        'Use floating row covers to protect seedlings, place sticky traps to catch them, and plant trap crops to protect the main crop.',
      grasshoppersPC:
        'Manually remove and kill the grasshoppers, use row covers to cover and protect the plants, and plow the soil to kill their eggs.',
      hornwormsPC:
        'Manually remove and kill the caterpillars, and use row covers to cover and protect the plants.',
      japaneseBeetlePC:
        'Manually remove and kill the beetles, use row covers to cover and protect the plants, and shake the plants to make them fall off.',
      largeCabbageWhitePC:
        'Manually remove and kill large cabbage white larvae, use floating row covers to protect the plants, and remove infested leaves.',
      leafhopperPC:
        'Use yellow sticky traps to catch adult leafhoppers or manually remove them, and use reflective mulches to repel them.',
      leafminersPC:
        'Remove infested leaves, use row covers to cover and protect the plants, and place yellow sticky traps to catch adult leafminers.',
      leafrollerPC:
        'Manually remove rolled leaves and caterpillars, use row covers to cover and protect the plants, and cut off infested plant parts.',
      loopersPC:
        'Manually remove and kill the caterpillars, use row covers to cover and protect the plants, and remove surrounding weeds that may act as hosts.',
      maggotPC:
        'Use floating row covers to protect the plants, and apply beneficial nematodes to the soil.',
      mealybugsPC:
        'Spray the plants with a strong stream of water to remove the mealybugs, and remove infested plant parts.',
      mexicanBeetlePC:
        'Manually remove the beetles and their larvae, and use row covers to cover and protect the plants.',
      pepperLaceBugPC:
        'Use row covers to cover and protect the plants, manually remove and kill them, and remove debris where they hide.',
      perseaMitesPC:
        'Cut off infested leaves, use horticultural oils to kill the mites, and apply predatory mites to your plants.',
      rhinocerosBeetlePC:
        'Manually remove and kill the beetles, remove infested plant parts, and use light traps to catch adult rhinoceros beetles.',
      rustFlyPC:
        'Use floating row covers to protect the plants and remove infested plant parts.',
      scaleInsectsPC:
        'Cut off infested branches, use horticultural oils to kill the scales, and scrub the scales with a brush to remove them from your plants.',
      skipperPC:
        'Manually remove and kill skipper larvae, and use row covers to cover and protect the plants.',
      slugsAndSnailsPC:
        'Manually remove and kill the slugs and snails, use copper barriers, and set up bait traps such as beer or yeast mixtures to catch them.',
      spiderMitesPC:
        'Spray the plants with a strong stream of water to remove the mites, use horticultural oils or insecticidal soaps, and remove infested leaves.',
      spinachCrownMitePC:
        'Remove infested plant parts and practice the recommended technique, crop rotation, to break the life cycle of spinach crown mites.',
      squashBugPC:
        'Manually remove and kill squash bug eggs, use row covers to cover and protect the plants, and remove debris where they hide.',
      squashVineBorerPC:
        'Remove infested vines, use row covers to cover and protect the plants, and insert wire or sticks into stems to kill squash vine borer larvae.',
      stinkbugsPC:
        'Manually remove and kill adult stink bugs, use row covers to cover and protect the plants, and remove weeds and debris where they hide.',
      thripsPC:
        'Use blue sticky traps to catch adult thrips, cut off infested plant parts, and use reflective mulches to repel them.',
      treeBorerPC:
        'Remove infested branches, use protective wraps around trees, and apply beneficial nematodes to the soil.',
      weevilPC:
        'Manually remove and kill adult weevils, use row covers to cover and protect the plants, and practice the recommended technique, crop rotation, to prevent their increase.',
      whitefliesPC:
        'Use yellow sticky traps to catch adult whiteflies, spray the plants with a strong stream of water to remove them, and remove infested leaves.',
      whiteGrubPC:
        'Apply beneficial nematodes to the soil, use floating row covers to protect the plants, and practice the recommended technique, crop rotation, to reduce infestation.',
      wirewormsPC:
        'Plow the soil to kill the larvae, use bait traps to prevent their increase, and practice the recommended technique, crop rotation.',

      // 100% Okay
      alternariaLeafSpotIdentification:
        'Alternaria leaf spot is a fungal disease that manifests as small, dark brown to black spots with yellow halos on leaves.',
      angularLeafSpotIdentification:
        'Angular Leaf Spot is a bacterial disease characterized by lesions on the leaves that begin as water-soaked spots, later turning gray or tan, and eventually becoming dead (necrotic) tissue.',
      anthracnoseIdentification:
        'Anthracnose is a fungal disease known for causing small, dark sunken lesions on leaves with yellow halos, stems, flowers, and fruits.',
      bacterialCankerIdentification:
        'Bacterial canker is identified by cankers with gumming on stems and water-soaked lesions on leaves.',
      bacterialLeafSpotIdentification:
        'Bacterial leaf spot is noted for small, water-soaked spots on leaves that eventually turn brown and dead (necrotic) tissue and are often surrounded by a yellow halo.',
      bacterialRingRotIdentification:
        'Bacterial Ring Rot leads to wilting and yellowing of leaves, with characteristic brown rot in tubers showing vascular rings.',
      bacterialSpotIdentification:
        'Bacterial spot results in small, dark, water-soaked spots on leaves, stems, and fruit, which enlarge and become dead (necrotic) tissue.',
      blackRotIdentification:
        'Black rot is a fungal disease characterized by dark, sunken lesions on leaves, stems, and fruit.',
      blackSigatokaIdentification:
        'Black Sigatoka causes dark streaks and spots on leaves, leading to large dead (necrotic) tissue areas and potentially leaf death.',
      blackSpotIdentification:
        'Black spot is a fungal disease that forms round, black spots with fringed margins on leaves, causing yellowing and leaf drop.',
      blossomEndRotIdentification:
        'Blossom-end rot is a physiological disorder characterized by dark, sunken spots on the blossom end of fruit, often due to calcium deficiency.',
      buckeyeRotIdentification:
        'Buckeye rot is a fungal disease that causes water-soaked brown to black spots with concentric rings on fruit.',
      cercosporaLeafBlightIdentification:
        'Cercospora Leaf Blight, caused by fungi, appears as brown to gray spots with reddish borders on leaves, leading to defoliation.',
      cercosporaLeafSpotIdentification:
        'Cercospora Leaf Spot shows as circular to irregular spots with light centers and dark borders on leaves.',
      cigarEndRotIdentification:
        'Cigar End Rot is a fungal disease identified by dark, sunken lesions on the tips of fruit.',
      clubrootIdentification:
        'Clubroot is a fungal disease that causes swollen, club-like roots, leading to stunted growth and wilting.',
      cottonyRotIdentification:
        'Cottony rot is a fungal disease characterized by white, cottony fungal growth on infected plant parts, leading to soft, watery rot and the yellowing of leaves.',
      dampingOffIdentification:
        'Damping-off is a fungal disease that causes seedlings to collapse and die due to rot at the stem base.',
      downyMildewIdentification:
        'Downy mildew is a fungal disease that presents as yellow or pale green spots on leaves, often accompanied by downy growth on the underside.',
      earlyBlightIdentification:
        'Early Blight is a fungal disease that forms dark, concentric ring lesions on leaves, stems, and fruit, typically starting on older leaves.',
      fusariumWiltIdentification:
        "Fusarium Wilt is identified by yellowing and wilting of leaves, with brown discoloration in the plant's vascular tissue.",
      grayLeafBlightIdentification:
        'Gray leaf blight, caused by fungi, manifests as gray lesions on leaves, usually beginning at the tips and edges.',
      grayMoldIdentification:
        'Gray Mold is a fungal disease characterized by gray, fuzzy mold growth on flowers, fruit, and foliage, leading to rotting tissue.',
      gummyStemBlightIdentification:
        'Gummy Stem Blight is a fungal disease that produces dark lesions with gummy exudate on stems and leaves.',
      lateBlightIdentification:
        'Late Blight is a fungal disease that causes water-soaked lesions on leaves, stems, and fruit, which quickly turn brown or black.',
      mosaicVirusIdentification:
        'Mosaic virus causes mottled or mosaic-like patterns on leaves, with irregular yellow, white, and green patches or discoloration.',
      phytophthoraBlightIdentification:
        'Phytophthora Blight is a fungal disease that leads to water-soaked lesions on leaves, stems, and fruit, often causing plant collapse and rot.',
      phytophthoraFruitRotIdentification:
        'Phytophthora fruit rot is noted for watery, brown rot on fruit, often accompanied by white fungal growth.',
      powderyMildewIdentification:
        'Powdery mildew is a fungal disease that appears as white, powdery growth on leaves, stems, and flowers, causing yellowing and curling.',
      pythiumFruitRotIdentification:
        'Pythium fruit rot, caused by fungi, generally starts as small, water-soaked lesions on immature or mature fruit near or in contact with the soil.',
      rootKnotNematodeIdentification:
        'Root Knot Nematode is a nematode disease that forms galls or knots on roots, leading to stunted growth and yellowing.',
      rootRotIdentification:
        'Root rot is a fungal disease characterized by brown, mushy roots that cause yellowing, wilting, and stunted growth.',
      rustIdentification:
        'Rust is a fungal disease that produces yellow, orange, red, or brown pustules on leaves and stems, leading to defoliation.',
      sootyMoldIdentification:
        'Sooty mold, a fungal disease, manifests as black, soot-like growth on leaves and stems, often associated with honeydew from sap-sucking insects.',
      sunblotchIdentification:
        'Sunblotch is a viral disease that causes chlorotic streaks or blotches on leaves and fruit, leading to distorted growth.',
      tomatoSpottedWiltIdentification:
        'Tomato Spotted Wilt is a viral disease characterized by ringspots, mottling, and necrosis on leaves and fruit.',
      verticilliumWiltIdentification:
        'Verticillium wilt is a fungal disease causing the yellowing and wilting of leaves, often one-sided, with brown streaks in the vascular tissue.',
      whiteMoldIdentification:
        'White mold is a fungal disease that presents as white, cottony fungal growth on stems, leaves, and pods, leading to rotting tissue.',

      // 100% Okay
      alternariaLeafSpotPC:
        'Remove infected leaves and plant debris, and improve air circulation by properly spacing between plants to reduce humidity.',
      angularLeafSpotPC:
        'Remove infected plant parts, avoid overhead irrigation to reduce leaf wetness, and practice crop rotation.',
      anthracnosePC:
        'Remove and dispose of infected plant parts, avoid overhead irrigation, and use plant-resistant varieties, if available.',
      bacterialCankerPC:
        'Remove infected branches and fruit, avoid overhead watering, and use sterilized tools and equipment.',
      bacterialLeafSpotPC:
        'Remove infected leaves and stems, ensure proper plant spacing for airflow, and avoid watering leaves directly.',
      bacterialRingRotPC:
        'Remove infected plants and tubers, practice crop rotation, and use disease-free planting material.',
      bacterialSpotPC:
        'Remove dark, water-soaked spots from leaves, stems, and fruit and improve air circulation around plants.',
      blackRotPC:
        'Remove infected plant parts, practice crop rotation, and ensure proper spacing to improve airflow and reduce humidity.',
      blackSigatokaPC:
        'Remove infected leaves, use resistant cultivars, and ensure proper spacing and air circulation.',
      blackSpotPC:
        'Remove infected leaves and debris, avoid overhead irrigation, and use resistant varieties if available.',
      blossomEndRotPC:
        'Ensure consistent watering to prevent moisture stress, and apply calcium supplements to the soil if needed.',
      buckeyeRotPC:
        'Remove and discard infected fruit, improve air circulation around plants, and avoid overhead watering.',
      cercosporaLeafBlightPC:
        'Remove infected plant parts, improve air circulation, and avoid overhead irrigation.',
      cercosporaLeafSpotPC:
        'Remove infected leaves, ensure proper plant spacing, and avoid overhead watering.',
      cigarEndRotPC:
        'Remove and discard infected fruit, avoid overhead watering, and ensure proper plant spacing and air circulation.',
      clubrootPC:
        'Use resistant plant varieties, practice crop rotation, and improve soil drainage to avoid compacted soil.',
      cottonyRotPC:
        'Remove infected plant parts, improve air circulation, and avoid excessive moisture while maintaining proper drainage.',
      dampingOffPC:
        'Avoid overwatering, use well-draining soil, and ensure proper spacing between seedlings.',
      downyMildewPC:
        'Remove infected plant parts, ensure good air circulation, and avoid overhead watering.',
      earlyBlightPC:
        'Remove infected leaves, improve air circulation, avoid overhead watering, and use resistant varieties.',
      fusariumWiltPC:
        'Use resistant plant varieties, practice crop rotation, and avoid planting in infested soil.',
      grayLeafBlightPC:
        'Remove infected leaves, improve air circulation, and avoid working with wet plants.',
      grayMoldPC:
        'Remove infected plant parts, ensure proper air circulation, and avoid excessive moisture.',
      gummyStemBlightPC:
        'Remove infected stems and leaves, improve air circulation, and avoid overhead watering.',
      lateBlightPC:
        'Remove infected plant parts, avoid overhead watering, and use resistant varieties if available.',
      mosaicVirusPC:
        'Remove infected plants, use virus-free seeds and resistant varieties, and control aphids and other insect vectors.',
      phytophthoraBlightPC:
        'Remove infected plant parts, improve soil drainage, and avoid overhead watering.',
      phytophthoraFruitRotPC:
        'Remove and discard infected fruit, ensure good drainage, and avoid overhead irrigation.',
      powderyMildewPC:
        'Remove infected plant parts, ensure proper plant spacing, and use resistant varieties.',
      pythiumFruitRotPC:
        'Remove infected fruit, improve soil drainage, and avoid excessive moisture.',
      rootKnotNematodePC:
        'Practice crop rotation, use nematode-resistant plant varieties, and solarize the soil if possible.',
      rootRotPC:
        'Improve soil drainage, avoid overwatering, and remove and discard infected plants.',
      rustPC:
        'Remove infected plant parts, ensure good air circulation, and avoid overhead watering.',
      sootyMoldPC:
        'Remove and control the source of honeydew, such as sap-sucking insects, and remove infected plant parts.',
      sunblotchPC:
        'Remove infected plants and use virus-free planting material.',
      tomatoSpottedWiltPC:
        'Remove infected plants, control thrips (which are vectors for the virus), and use resistant varieties.',
      verticilliumWiltPC:
        'Use resistant varieties, practice crop rotation, and avoid planting in infested soil.',
      whiteMoldPC:
        'Remove infected plant parts, ensure good air circulation, and avoid excessive moisture.',

      // 100% Okay
      assassinBugsIdentification:
        'Assassin bugs vary in size and color. They are predatory insects known for their elongated bodies, strong legs, and curved, needle-like mouthparts used to inject venom into their prey.',
      batsIdentification:
        'Bats are nocturnal mammals with wings, sharp teeth, large ears, and a keen sense of echolocation, which they use to navigate and hunt insects in the dark.',
      beesIdentification:
        'Bees are flying insects with hairy bodies, typically yellow and black, and are well-known for their role in pollination. They have a specialized mouthpart for collecting nectar.',
      birdsIdentification:
        'Birds vary widely in size, color, and habitat, and they are characterized by feathers, wings, beaks, and the ability to lay eggs.',
      butterfliesIdentification:
        'Butterflies are day-flying insects with large, often patterned wings and slender bodies. They begin as caterpillars before transforming into butterflies, known for their beauty.',
      earthwormsIdentification:
        'Earthworms are elongated, legless, soft-bodied bodies, often brown or reddish in color.',
      fliesIdentification:
        'Robber flies vary in size, and they are stout, fast-flying insects with long legs and a bristly face.',
      groundBeetlesIdentification:
        'Ground beetles are fast-moving insects with shiny, often black or metallic bodies.',
      lacewingsIdentification:
        'Adult lacewings are small insects with large, transparent wings that are lace-like and long antennae, often green or brown in color.',
      ladybugsIdentification:
        'Adult ladybugs are small, round-shaped, typically red, yellow, or orange in color, with spotted wing covers.',
      spidersIdentification:
        'Spiders are eight-legged arachnids of various shapes and sizes and are known for spinning webs to capture prey.',
      waspsIdentification:
        'Braconid wasps are small, slender wasps with long antennae and a wide variety of colors and patterns.',

      // 100% Okay
      assassinBugsBenefits:
        'They prey on various pest insects, such as caterpillars, aphids, and beetles.',
      batsBenefits:
        'They are valuable for controlling insect populations, particularly mosquitoes and other night-flying pests.',
      beesBenefits:
        'They are essential pollinators, playing a critical role in the reproduction of various flowering plants and crops.',
      birdsBenefits:
        'They contribute to pest control by feeding on insects and other small pests.',
      butterfliesBenefits:
        'They help pollinate flowers, supporting fruit and seed production; their presence enhances biodiversity and contributes to a healthy ecosystem; and their larvae can aid in managing garden pests.',
      earthwormsBenefits:
        'They aerate the soil and enhance its structure, making it more conducive to plant growth. They also decompose organic matter, enriching the soil with nutrients essential for healthy plant development.',
      fliesBenefits:
        'They help control pest populations by preying on various insects, reducing the need for chemical controls, and maintaining ecological balance.',
      groundBeetlesBenefits:
        'They are natural predators of various garden pests, including slugs, caterpillars, and aphids.',
      lacewingsBenefits:
        'They are highly beneficial, as both larvae and adult lacewings prey on soft-bodied pests such as aphids, mites, and small caterpillars.',
      ladybugsBenefits:
        'They are voracious predators of aphids, scale insects, and other soft-bodied pests.',
      spidersBenefits:
        'They are beneficial predators, feeding on a variety of insects and other arthropods.',
      waspsBenefits:
        'They naturally control pest populations by parasitizing harmful insects like aphids and caterpillars, which helps protect crops and supports ecological balance.',

      // 100% Okay
      affectedCrops: 'Affected crops',
      noAffectedCropsFound: 'No affected crops found',
      identification: 'Identification',
      damage: 'Damage',
      physicalControl: 'Physical control',
      benefits: 'Benefits',

      // 100% Okay
      // ---------- Others ----------
      searchCrop: 'Search crop...',
      category: 'Category',
    },
  },
  fil: {
    translation: {
      // ---------- Bottom Tabs ----------
      // 100% Okay
      Crop: 'Pananim',
      Favorite: 'Paborito',
      Notfavorite: 'Hindi paborito',
      More: 'Higit pa',

      // ---------- Season Module ----------
      // 100% Okay
      Cool: 'Malamig',
      Warm: 'Mainit',
      Perennial: 'Matagalan',

      // ---------- Crops Module ----------
      // 100% Okay
      All: 'Lahat',
      Vegetable: 'Gulay',
      Fruit: 'Prutas',
      Herb: 'Halamang Gamot',
      Root: 'Halamang Ugat',

      Others: 'Iba pa',
      cropNotFound: 'Hindi nahanap ang pananim',

      // ---------- Favorite Module ----------
      // 100% Okay
      noFavoritesYet: 'Wala pang paborito',

      // ---------- Settings Module ----------
      theme: 'Tema',
      darkMode: 'Madilim na tema',
      language: 'Wika',

      // ---------- Crop Info Module ----------
      // Hereeeeeee
      Tomato: 'Kamatis',
      tomatoDescription:
        'Ang halaman ng kamatis ay maaaring maging tuwid na may maikling tangkay o parang baging na may mahabang kumakalat na mga tangkay na nagbubunga ng mga dilaw na bulaklak, na maaaring bumuo ng isang cyme na 3-12 at karaniwan ay isang bilog na bunga na may makinis na balat na maaaring pula, rosas, lila, kayumanggi, kahel, o dilaw ang kulay.',
      tomatoBenefits:
        'Ang mga kamatis ay mayaman sa bitamina C at nutrients tulad ng potassium.',
      tomatoFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      tomatoUses: [
        'Ang mga kamatis ay karaniwang ginagamit na sariwa sa mga salad, sandwich, at bilang isang topping para sa mga pizza.',
        "Ang mga kamatis ay maaaring kainin ng hilaw o luto, at ginagamit ito sa iba't ibang mga putahe.",
        'Ang mga kamatis ay maaaring iproseso sa juice, ketchup, puree, paste, o powder.',
        'Ginagamit din ang mga kamatis sa paggawa ng sawsawan, lalo na sa Pilipinas.',
      ],

      BitterMelon: 'Ampalaya',
      bitterMelonDescription:
        'Ang ampalaya ay isang gulay na berde ang balat na may puti hanggang translucent na laman at may lasa na akma sa pangalan nito.',
      bitterMelonBenefits: '',
      bitterMelonFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      bitterMelonUses: [
        'Ang ampalaya ay karaniwang niluluto kapag ito ay berde o bahagyang dilaw.',
        'Ang mga batang sanga at dahon ng ampalaya ay maaari ding kainin bilang mga gulay.',
        'Ang bunga ng ampalaya ay mapait kapag sariwa at maaaring ibabad sa malamig na tubig upang maalis ang mapait na lasa.',
      ],

      Pumpkin: 'Kalabasa',
      pumpkinDescription:
        'Ang mga kalabasa ay may balahibo na mga tangkay, malaki, malalim na lobed na mga dahon na kadalasang naglalaman ng mga puting tuldok, at dilaw o kahel na mga bulaklak. Ang bunga ay pabagu-bago sa hugis at kulay ngunit kadalasan ay kahel, puti, cream, o berde, na naglalaman ng humigit-kumulang 70% na laman at ilang malalaking puting buto.',
      pumpkinBenefits:
        'Ang kalabasa ay naglalaman ng bitamina A, B9, C, at E at mga nutrients tulad ng fiber, iron, lutein, potassium, at zeaxanthin.',
      pumpkinFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      pumpkinUses: [
        'Maaaring gamitin ang kalabasa sa paggawa ng mga pie, cake, muffin, at iba pang panghimagas.',
        "Ang laman ng kalabasa, dahon, at bulaklak ay maaaring lutuin at kainin sa iba't ibang mga putahe.",
        'Ang mga buto ay nakakain din at karaniwang iniihaw at kinakain bilang meryenda.',
      ],

      LadysFinger: 'Okra',
      ladysFingerDescription:
        'Ang mga halaman ng okra ay may maliliit, tuwid na mga tangkay na maaaring mabalahibo o walang buhok na may hugis pusong mga dahon. Ang halaman ay gumagawa ng mga bulaklak na may limang puti hanggang dilaw na petals, na 1.6-3.1 pulgada ang diyametro. Ang balat nang buto ay isang kapsula hanggang 10 pulgada ang haba, na naglalaman ng maraming buto.',
      ladysFingerBenefits:
        'Ang okra ay naglalaman ng bitamina A, B6, B9, C, at K, pati na rin ang mga nutrients tulad ng fiber, magnesium, at polyphenol. Nakakatulong din ito sa pagpapalakas ng buto, pagpapababa ng presyon ng dugo, pag-iwas sa constipation, at pagpapanatili ng malusog na balat.',
      ladysFingerFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      ladysFingerUses: [
        'Ang okra ay ginagamit sa mga sabaw tulad ng sinigang, lalo na sa Pilipinas.',
      ],

      Lettuce: 'Litsugas',
      lettuceDescription:
        'Ang halaman ng litsugas ay maaaring mag-iba sa laki, hugis, at uri ng dahon, ngunit sa pangkalahatan, ang mga dahon ng halaman ay bumubuo ng isang siksik na ulo o maluwag na roseta. Ang mga dahon ay maaaring makinis o kulot at kadalasang berde o pula ang kulay.',
      lettuceBenefits:
        'Ang litsugas ay naglalaman ng bitamina A at C, pati na rin ang mga sustansya tulad ng calcium, iron, lutein, potassium, quercetin, at zeaxanthin.',
      lettuceFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      lettuceUses: [
        'Pangunahing kinakain ang litsugas bilang isang salad green. Ang ilang mga uri ay maaaring lutuin at kainin bilang isang gulay.',
        "Ang litsugas ay nagbibigay ng malutong na base para sa iba't ibang toppings at dressing.",
        'Ito ay sikat sa Samgy, lalo na sa Pilipinas, at ginagamit bilang pambalot ng karne.',
      ],

      Cucumber: 'Pipino',
      cucumberDescription:
        'Ang halamang pipino ay gumagawa ng mga dilaw na bulaklak na 1.6 pulgada ang diyametro. Ang bunga ng pipino ay nag-iiba sa hugis ngunit sa pangkalahatan ay isang hubog na silindro na bilugan sa magkabilang dulo na maaaring umabot ng hanggang 24 pulgada ang haba at 3.9 pulgada ang diyametro.',
      cucumberBenefits:
        'Ang pipino ay naglalaman ng bitamina A, B, C, at K, pati na rin ang mga nutrients tulad ng antioxidants, cucurbitacin, fiber, magnesium, manganese, at potassium.',
      cucumberFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      cucumberUses: [
        "Ang mga pipino ay madalas na hinihiwa at ginagamit bilang isang palamuti para sa iba't ibang mga pagkain at mga gawain sa pangangalaga sa balat.",
      ],

      Moringa: 'Malunggay',
      moringaDescription:
        'Ang malunggay ay isang maliit hanggang katamtamang laging lunti na mga puno o Punong nalalagas ang mga dahon. Ang bunga nito ay kulay berde kapag bata pa at nagiging kayumanggi sa kapanahunan. Ang mature na bunga ay nahati sa bawat anggulo upang ilantad ang mga buto.',
      moringaBenefits: '',
      moringaFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      moringaUses: [
        'Ang mga dahon ng malunggay at pods ay karaniwang ginagamit sa pagluluto, parehong sariwa at tuyo.',
        'Ang mga dahon ay madalas na idinagdag sa mga sabaw.',
        'Ang mga tuyong dahon ng malunggay ay pinupulbos din para sa mga suplemento sa nutrisyon.',
      ],

      StringBean: 'Sitaw',
      stringBeanDescription:
        'Ang sitaw, na kilala rin bilang green beans o snap beans, ay malawak na kinikilala para sa kanilang makulay na berdeng kulay, malutong na tekstura, at banayad na lasa. Ang mga payat at pahabang pod na ito ay karaniwang inaani habang sila ay bata at malambot pa, bago tuluyang ma-develop ang mga buto sa loob.',
      stringBeanBenefits: '',
      stringBeanFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      stringBeanUses: [
        'Sa Pilipinas, ang sitaw ay kadalasang sangkap sa mga tradisyonal na pagkain tulad ng sinigang.',
      ],

      ChineseCabbage: 'Pechay Baguio',
      chineseCabbageDescription:
        'Ang uri ng pechay baguio ay binubuo ng humigit-kumulang 30 indibidwal na dahon na nakaayos sa isang maluwag, pilipit na ulo at Madilim na lunti at makintab. Ang mga tangkay nito ay puti o mapusyaw na berde, makapal, at mataba.',
      chineseCabbageBenefits: '',
      chineseCabbageFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      chineseCabbageUses: [
        'Ang panloob na dahon ng pechay baguio ay kinakain ng hilaw o luto, habang ang matigas na panlabas na dahon ay kadalasang ginagamit sa mga sabaw.',
        'Ito ay isang pangunahing sangkap sa kimchi, isang tradisyonal na Korean fermented dish.',
        'Ang mga dahon ay maaaring gamitin ng sariwa sa mga salad para sa isang malutong na texture.',
      ],

      MustardGreen: 'Mustasa',
      mustardGreenDescription:
        'Ang halaman ng mustasa ay pinakakilala sa mga maliliit at dilaw na buto nito na gumagawa ng isa sa mga pinakasikat na pampalasa.',
      mustardGreenBenefits: '',
      mustardGreenFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      mustardGreenUses: [
        'Ang mga mustasa ay ginagamit ng sariwa sa mga salad o sabaw.',
      ],

      Chilli: 'Sili',
      chilliDescription:
        'Ang sili ay karaniwang itinatanim para sa kanilang mga bunga, na ginagamit bilang pampalasa. Ang mga pangmatagalang halaman na ito ay maaaring mala-damo o parang palumpong, sumasanga na may berdeng kayumangging tangkay at simpleng mga dahong hugis-itlog.',
      chilliBenefits:
        'Ang sili ay naglalaman ng 32% ng bitamina A, 39% ng bitamina B6, bitamina C, 14% ng copper, 13% ng iron, at 7% ng potassium.',
      chilliFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      chilliUses: [
        'Ang mga sili ay karaniwang ginagamit, sariwa o tuyo, upang magdagdag ng maanghang na lasa sa mga putahe.',
        'Ang mga ito ay isang pangunahing sangkap sa maraming mga sarsa, tulad ng Maanghang na sarsa at Sarsa ng sili.',
        'Ang mga sili ay maaaring kainin nang sariwa o lutuin bilang gulay, pampalasa, o palamuti.',
      ],

      BottleGourd: 'Upo',
      bottleGourdDescription:
        'Ang upo, na kilala rin bilang calabash gourd, ay nagtatampok ng malalaking baging na may malalaking puting bulaklak na karaniwang nagbubukas sa gabi. Ang mga batang bunga nito ay mabalahibo at kadalasang mapusyaw na berde, ngunit sila ay nagiging makinis at nagiging beige o kayumanggi habang sila ay tumatanda.',
      bottleGourdBenefits: '',
      bottleGourdFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      bottleGourdUses: [],

      LimaBean: 'Patani',
      limaBeanDescription:
        'Ang patani, na karaniwang kilala bilang butter bean, ay isang berde o mapusyaw na berdeng flat bean. Pangunahing ginagamit ito para sa mga buto, dahil ang mga pod ay kadalasang magaspang o woody. Mayroong dalawang pangunahing mga uri:umaakyat o uri ng tanim sa poste o isang dwarf o bush variety, na ang huli ay karaniwang ginagamit sa komersyal na canning.',
      limaBeanBenefits: '',
      limaBeanFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      limaBeanUses: [
        'Karaniwang ginagamit ang patani sa mga sabaw, nilaga, at kaserol.',
        'Maaari silang durugin at timplahan bilang isang pampatanggal-gutom o gamitin bilang isang palaman.',
        'Tinatangkilik din ang patani dahil nagbibigay ito ng mayaman na protina.',
      ],

      WingedBean: 'Sigarilyas',
      wingedBeanDescription:
        'Ang halamang sigarilyas ay lumalaki bilang isang baging na may mga umaakyat na tangkay na karaniwang berde ngunit maaari ding maging lila. Ang mga bean pod ay maaaring makinis o magaspang, depende sa genotype, at ang kanilang mga kulay ay maaaring mula sa cream at berde hanggang kulay rosas at lila. Kapag ganap na hinog, ang mga pods ay nagiging ash-brown at nahati upang palabasin ang mga buto (beans).',
      wingedBeanBenefits: '',
      wingedBeanFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      wingedBeanUses: [
        'Ang mga dahon ng winged bean ay maaaring kainin tulad ng spinach, ang mga bulaklak ay maaaring gamitin sa mga salad, ang mga tubers ay maaaring kainin ng hilaw o luto, at ang mga buto ay maaaring gamitin sa mga katulad na paraan tulad ng toyo.',
      ],

      SpongeGourd: 'Patola',
      spongeGourdDescription:
        'Ang patola ay isang berdeng kalabasa na may mga umbok, na kilala sa masarap nitong lasa at malambot na tekstura.',
      spongeGourdBenefits: '',
      spongeGourdFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      spongeGourdUses: [
        'Ang patola ay karaniwang ginagamit sa mga sabaw.',
        'Ang mature na patola ay maaaring patuyuin at gamitin bilang natural na sponge para sa paglilinis at pag-exfoliating ng balat.',
      ],

      Chayote: 'Sayote',
      chayoteDescription:
        'Ang sayote ay nilinang para sa mga nakakain nitong bunga. Ito ay isang mabilis na lumalagong umaakyat na baging na may mga katangiang pag-uugatan. Ang bawat bunga ay humigit-kumulang 7.5 hanggang 10 cm ang haba at naglalaman ng isang buto na naka-embed sa berde hanggang berdeng puti na laman.',
      chayoteBenefits: '',
      chayoteFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      chayoteUses: [],

      Eggplant: 'Talong',
      eggplantDescription:
        'Ang halamang talong ay may sumasanga na tangkay at simple, mahaba, at patag. magaspang na lobed dahon, na berde ang kulay at nakaayos na salit-salit sa mga sanga. Ang bunga nito ay isang malaki, mataba, hugis-itlog na berry na maaaring umabot sa 15.7 pulgada ang haba, na may makintab, makinis na balat at maraming maliliit na buto. Ang kulay ng bunga ay pabagu-bago at maaaring puti, berde, dilaw, lila, o itim.',
      eggplantBenefits:
        'Ang talong ay naglalaman ng bitamina B1, B3, B6, B9, C, at K, pati na rin ang mga sustansiya	 tulad ng antioxidants, copper, fiber, manganese, at potassium.',
      eggplantFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      eggplantUses: [
        "Karaniwang niluluto ang talong bago kainin at kinakain bilang gulay. Ito ay karaniwang iniihaw o pinirito at ginagamit sa iba't ibang putahe.",
      ],

      WaterSpinach: 'Kangkong',
      waterSpinachDescription:
        'Ang kangkong ay lumalaki sa tubig o sa mamasa-masa na lupa. Ang mga tangkay nito ay 2-3 metro o mas mahaba pa, na nag-uugat sa mga node. Ang mga tangkay ay guwang, na nagpapahintulot sa kanila na lumutang. Iba-iba ang hugis ng mga dahon mula sa karaniwang sagittate (hugis-ulo ng arrow) hanggang Hugis-lansiya, na may sukat na 5-15 cm ang haba at 2-8 cm ang lapad. Ang mga bulaklak ay hugis trumpeta, 3-5 cm ang lapad, at kadalasang puti na may mauve center.',
      waterSpinachBenefits: '',
      waterSpinachFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      waterSpinachUses: [
        'Ang kangkong ay ginagamit sa mga sabaw tulad ng sinigang, lalo na sa Pilipinas.',
      ],

      Spinach: 'Espinaka',
      spinachDescription:
        'Ang halaman ng espinaka ay may mga simpleng dahon na nagmumula sa gitna ng halaman at may sukat na mga 0.8-12.0 pulgada ang haba at 0.4-6.0 pulgada ang lapad. Ang mga dahon ay lumalaki sa isang rosette at maaaring lumitaw na kulubot o patag. Ang halaman ay gumagawa ng maliliit na dilaw-berdeng bulaklak na 0.1 pulgada ang lapad. Ang mga bulaklak ay gumagawa ng maliliit na kumpol ng bunga, na naglalaman ng mga buto.',
      spinachBenefits:
        'Ang espinaka ay naglalaman ng bitamina A, C, at K1, pati na rin ang mga sustansiya tulad ng calcium, fiber, at iron.',
      spinachFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      spinachUses: [
        'Ang espinaka ay karaniwang ginagamit na sariwa sa mga salad at sandwich.',
        'Ang espinaka ay ginagamit sa mga sabaw, nilaga, at kaserol.',
      ],

      BlackPepper: 'Paminta',
      blackPepperDescription:
        'Ang paminta ay isang halamang itinanim para sa bunga nito, na pinoproseso sa itim, puti, at berdeng paminta na ginagamit sa pagluluto. Mayroon itong parang baging o maraming palumpong na tangkay, simpleng dahon, at 50-150 spike ng mga bulaklak.',
      blackPepperBenefits:
        'Ang paminta ay naglalaman ng mga bitamina A, B, E, at K, pati na rin ang mga sustansya tulad ng copper, iron, and manganese para sa kalusugan ng buto, kaligtasan sa sakit, enerhiya, at higit pa.',
      blackPepperFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      blackPepperUses: [
        'Ang paminta ay karaniwang ginagamit bilang pampalasa sa pagluluto.',
        "Pinahuhusay nito ang lasa ng iba't ibang uri ng mga putahe, mula sa mga sabaw at nilaga hanggang sa mga karne at gulay.",
      ],

      Papaya: 'Papaya',
      papayaDescription:
        'Karaniwang nililinang ang papaya para sa maliliit hanggang malalaking bunga na parang melon. Ang bunga ng papaya ay isang malaki, mataba na berry na may makinis na berdeng balat na nagiging dilaw o kahel kapag hinog na. Ang laman ng bunga ay makapal at makatas, mula sa dilaw hanggang pula o kahel, at may maraming itim at kulubot na buto.',
      papayaBenefits:
        'Ang mga hinog na bunga ay mataas sa bitamina A at C, na kadalasang kulang sa mga diyeta ng mga taong naninirahan sa tropiko.',
      papayaFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      papayaUses: [
        'Ang papaya ay karaniwang kinakain sariwa bilang matamis at masustansyang prutas.',
        'Ang papaya ay maaaring i-blend upang gawing juice at inumin.',
      ],

      Calamondin: 'Kalamansi',
      calamondinDescription:
        'Ang puno ng kalamansi ay hindi regular na sanga at nagtataglay ng matutulis na mga tinik. Ang puno ay nagbubunga ng maliliit, may takip na puting bulaklak at madilaw-dilaw na berdeng bunga, na bilog o parang itlog ang hugis at maaaring magbunga ng maraming taon.',
      calamondinBenefits: '',
      calamondinFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      calamondinUses: [
        'Ang mga kalamansi ay karaniwang ginagamit sa paggawa ng sawsawan.',
      ],

      Banana: 'Saging',
      bananaDescription:
        'Ang mga saging ay mahaba, kurbadong bunga na may makinis, dilaw, at kung minsan ay bahagyang berde ang balat. Ang balat ng saging ay karaniwang dilaw kapag ito ay hinog na, ngunit maaari rin itong berde, pula, o lila, depende sa uri.',
      bananaBenefits:
        'Ang mga saging ay isang magandang mapagkukunan ng mga bitamina at mineral, kabilang ang bitamina B6, bitamina C, at potassium.',
      bananaFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      bananaUses: [
        'Ang mga saging ay kadalasang ginagamit bilang masustansyang meryenda o sangkap sa mga minatamis na inumin at iba pang pagkain.',
        'Ang bunga ay ang pinakamalawak na ginagamit na bahagi ng halaman at maaaring kainin ng sariwa, luto, o iproseso sa almirol, chips, katas, serbesa, suka, o tuyo upang makagawa ng pinatuyong prutas.',
      ],

      Mango: 'Mangga',
      mangoDescription:
        'Ang bunga ng mangga ay halos hugis-itlog, na may hindi pantay na gilid. Ang bunga ay isang buto, na may panlabas na laman na nakapalibot sa isang bato. Ang laman ay malambot at dilaw-kahel ang kulay. Ang balat ng bunga ay mula dilaw-berde hanggang pula.',
      mangoBenefits:
        'Ang bunga ng mangga ay hindi lamang matamis ngunit mayroon ding halaga ng sustansya, dahil nakakatulong ito na mapabuti ang kaligtasan sa sakit at gumaganap ng mahalagang papel sa panunaw. Ang bunga ng mangga ay mababa sa kaloriya at ito ang pinakamahusay na pagpipilian kapag binabawasan ang pagpasok ng kaloriya. Ang mga mangga ay kadalasang kinakain bilang isang prutas na kilala bilang mangga, na lubhang mayaman sa bitamina A, C, at D.',
      mangoFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      mangoUses: [
        'Ang mangga ay karaniwang kinakain ng sariwa.',
        'Ginagamit ang mga ito sa mga fruit salad, minatamis na inumin, at panghimagas.',
      ],

      Guava: 'Bayabas',
      guavaDescription:
        'Gumagawa ang bayabas ng nag-iisang puting bulaklak at bunga na berry. Ang bunga ay hugis-itlog at berde hanggang dilaw ang kulay. Ang laman sa loob ay maaaring puti, dilaw, rosas, o pula ang kulay at naglalaman ng maraming madilaw-dilaw na buto.',
      guavaBenefits: '',
      guavaFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      guavaUses: [
        'Ang bayabas ay karaniwang kinakain sariwa bilang matamis at malasang prutas.',
      ],

      Pineapple: 'Pinya',
      pineappleDescription:
        'Ang halaman ng pinya ay may maikli, matitipunong tangkay at roseta ng hugis-espada na mga dahon na may mga dulong parang karayom. Ang mga indibidwal na bunga ay nabubuo mula sa mga bulaklak at nagsasama upang bumuo ng isang malaking silindriko na bunga na pinangungunahan ng korona. Ang bunga na ito, na kilala bilang isang pinya, ay may matigas na balat na binubuo ng mga heksagonal na yunit at mahibla, makatas na laman na maaaring dilaw hanggang puti ang kulay.',
      pineappleBenefits: '',
      pineappleFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      pineappleUses: [
        "Ang bunga ng pinya ay karaniwang kinakain ng sariwa, o maaari itong lutuin sa iba't ibang mga putahe.",
        'Ang pinya ay maaari ding de-lata o gamitin para makagawa ng juice.',
        'Ginagamit ito sa mga fruit salads, panghimagas, at bilang isang topping para sa pizza, yogurt, at ice cream.',
      ],

      Avocado: 'Abukado',
      avocadoDescription:
        "Ang puno ng abukado ay malaki at hugis simboryo, na may mga hugis-itlog o eliptikal na dahon na nakaayos sa isang spiral sa mga dulo ng mga sanga. Ang mga bunga ay maaaring kulay lila hanggang berde na may makinis o kulugo na balat, depende sa iba't. Ang laman ng bunga ay dilaw-berde ang kulay at may pare-parehong mantikilya. Ang bawat bunga ay naglalaman ng isang malaking buto.",
      avocadoBenefits:
        'Ang mga avocado ay pinagmumulan ng mga bitamina B6, C, E, at K, pati na rin ang mga nutrisyon tulad ng magnesium at potassium.',
      avocadoFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      avocadoUses: [
        'Ang abukado ay ginagamit sa mga salad, sandwich, at balot para sa creamy texture nito.',
      ],

      Pomelo: 'Suha',
      pomeloDescription:
        'Ang puno ng suha ay may baluktot na tangkay, hindi regular na mga sanga, may pakpak na tangkay ng dahon, at mabangong bulaklak. Malaki ang bunga, tumitimbang ng 1-2 kilo at may mas makapal na balat kaysa sa grapefruit. Ito ay may banayad na lasa na katulad ng grapefruit, na may bahagyang kapaitan. Ang ilang mga uri ay naglalaman ng maraming buto.',
      pomeloBenefits: '',
      pomeloFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      pomeloUses: [
        'Ang mga segment ng suha ay kinakain nang sariwa, kadalasang idinagdag sa mga salad o kinakain bilang isang nakakapreskong meryenda.',
      ],

      Coconut: 'Niyog',
      coconutDescription:
        'Ang niyog ay may makinis, mapusyaw na kulay-abo na tangkay na may kitang-kitang mga peklat ng dahon at 60-70 spirally arranged na dahon. Mayroon itong prutas na drupe na may iisang buto, pinoprotektahan ng makapal na shell, at bahagyang napuno ng tubig ng niyog.',
      coconutBenefits: '',
      coconutFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      coconutUses: [
        'Ang mga niyog ay pangunahing nilinang para sa kanilang langis. Ang langis ay nakuha mula sa endosperm at ginagamit sa pagluluto. Ang mga mababang uri ng langis ay ginagamit sa paggawa ng mga sabon.',
        'Ang endosperm ay maaaring kainin ng sariwa o tuyo at karaniwang grated para gamitin sa baking.',
        'Ang mga batang niyog, na tinatawag na waternuts, ay karaniwang ibinebenta sa mga tropikal na resort, kung saan ang likido ay direktang iniinom mula sa shell.',
        'Ang mga niyog ay maaari ding gamitin upang makagawa ng gata ng niyog sa pamamagitan ng pagpiga sa likido mula sa grated endosperm.',
      ],

      PassionFruit: 'Passion Fruit',
      passionFruitDescription:
        'Ang mga passion fruit ay bilog o hugis-itlog at karaniwang may sukat mula 1.5 hanggang 3 pulgada ang lapad. Maaari silang maging dilaw, pula, lila, o berde.',
      passionFruitBenefits: '',
      passionFruitFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      passionFruitUses: [
        'Ang pulp ng passion fruit ay kinakain nang sariwa, kadalasang sinasandok, at ginagamit sa mga panghimagas o bilang isang topping.',
      ],

      Soursop: 'Guyabano',
      soursopDescription:
        'Ang mga bunga ng guyabano ay tumutubo sa mga puno, malaki at hugis-itlog. Ang berdeng panlabas, na natatakpan ng mga tinik, ay nakapaloob sa isang puti, mahibla na laman. Ang lasa ng soursop ay madalas na inilarawan bilang isang krus sa pagitan ng mangga at pinya.',
      soursopBenefits: '',
      soursopFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      soursopUses: ['Ang laman ng guyabano ay karaniwang kinakain ng sariwa.'],

      CottonFruit: 'Santol',
      cottonFruitDescription:
        'Mayroong dalawang uri ng santol, na dating itinuturing na dalawang magkaibang species, ang dilaw na uri at ang pulang uri. Ang mga bunga ay kadalasang kasing laki, hugis, at bahagyang malabo na texture ng mga peach, na may mapula-pula na kulay. Ang parehong uri ay may balat na maaaring manipis na balat hanggang sa mas makapal na balat, ayon sa uri.',
      cottonFruitBenefits: '',
      cottonFruitFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      cottonFruitUses: [
        'Ang santol ay isang popular na pagpipilian para sa meryenda, pagluluto, at paggawa ng mga nakakapreskong inumin dahil sa kakaibang lasa nito at maraming benepisyo sa kalusugan.',
      ],

      JavaPlum: 'Duhat',
      javaPlumDescription:
        'Ang duhat, na kilala rin bilang Malabar plum, black plum, jamun, jaman, jambul, o jambolan, ay isang evergreen na tropikal na puno na kabilang sa pamilya Myrtaceae. Ito ay pinahahalagahan para sa kanyang bunga, kahoy, at mga katangiang ornamental.',
      javaPlumBenefits: '',
      javaPlumFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      javaPlumUses: [
        'Ang mga bunga ng duhat ay karaniwang kinakain ng sariwa.',
      ],

      SugarApple: 'Atis',
      sugarAppleDescription:
        'Ang mga atis ay maliliit na puno na may mabangong bulaklak at nakakain na bunga. Ang mga ito ay sikat sa bahay at nakakain na mga hardin dahil maaari silang magbunga kahit na itago sa maliit na sukat at nangangailangan ng kaunting pangangalaga.',
      sugarAppleBenefits: '',
      sugarAppleFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      sugarAppleUses: [
        'Ang laman ng atis ay kinakain nang sariwa, scooped out, at kinakain bilang meryenda.',
      ],

      StarApple: 'Kaimito',
      starAppleDescription:
        'Ang kaimito ay nilinang para sa nakakain nitong bunga, na katulad ng laki at hugis sa isang mansanas at pinangalanan para sa hugis-star nitong sentro. Ang ibabaw ng bunga ay matatag at makinis. Iba-iba ang kulay ng balat at laman, mula puti hanggang lila, at ang laman ay matamis at malasa.',
      starAppleBenefits: '',
      starAppleFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      starAppleUses: ['Ang kaimito ay karaniwang kinakain ng sariwa.'],

      VelvetApple: 'Mabolo',
      velvetAppleDescription:
        'Ang mabolo ay nilinang para sa nakakain nitong bunga, na nagtatampok ng pinong, velvety, reddish-brown, fur-like covering. Ang bunga ay may malambot, creamy, kulay-rosas na laman at isang lasa at aroma na katulad ng mga peaches.',
      velvetAppleBenefits: '',
      velvetAppleFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      velvetAppleUses: ['Ang mabolo ay karaniwang kinakain ng sariwa.'],

      Bilimbi: 'Kamias',
      bilimbiDescription:
        'Ang kamias ay isang maliit na tropikal na puno. Ang bunga ay ellipsoidal at pahaba, na may sukat na mga 4 hanggang 10 cm, at kung minsan ay may malabong 5-anggulo na hugis. Ang balat ay makinis hanggang bahagyang bukol, manipis, at waxy, nagbabago mula sa mapusyaw na berde hanggang sa madilaw-dilaw na berde habang ito ay hinog.',
      bilimbiBenefits: '',
      bilimbiFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      bilimbiUses: [
        'Ang mga bunga ng kamias ay kinakain ng sariwa, kadalasang ginagamit sa mga salad o pickled.',
        'Ginagamit ang mga ito sa lutuing Pilipino para sa kanilang maasim na lasa sa mga pagkaing tulad ng sinigang.',
      ],

      SpanishPlum: 'Sineguelas',
      spanishPlumDescription:
        'Ang mga sineguelas ay maliliit na bunga, na may karaniwa na 2 hanggang 5 sentimetro ang diyametro, na may pinahabang, bilog hanggang hugis-itlog na hugis. Ang balat ay semi-makinis, manipis, makinis, at makintab, nagbabago ng kulay mula berde hanggang dilaw o maliwanag na pula habang ito ay hinog.',
      spanishPlumBenefits: '',
      spanishPlumFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      spanishPlumUses: [
        'Ang mga bunga ng sineguelas ay kinakain ng sariwa at kadalasang ginagamit sa mga salad o panghimagas.',
      ],

      Tamarind: 'Sampalok',
      tamarindDescription:
        'Ang puno ng sampalok ay gumagawa ng kayumanggi, parang pod na mga bunga na naglalaman ng matamis at mabangong pampalasa. Ang pampalasa na ito ay malawakang ginagamit sa mga lutuin sa buong mundo.',
      tamarindBenefits: '',
      tamarindFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      tamarindUses: [
        'Karaniwang ginagamit ng mga Pilipino ang sampalok dahil sa maasim nitong lasa sa mga pagkaing tulad ng sinigang.',
      ],

      ManilaTamarind: 'Kamatsile',
      manilaTamarindDescription:
        'Ang kamatsile ay may maikli, matipuno, kulay-abo na puno na may mababang, hindi regular na mga sanga at bumubuo ng malawak na korona. Ang mga prutas ay maberde-berdeng kayumanggi hanggang pulang medyo kulay rosas, hindi naghihiwalay na mga pod. Ang mga pod ay medyo manipis at nakalagay sa isang spiral ng 1 hanggang 3 whorls at naglalaman ng mga patag, itim, at makintab na buto.',
      manilaTamarindBenefits: '',
      manilaTamarindFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      manilaTamarindUses: [
        'Ang laman na nakapalibot sa buto ng kamatsile ay karaniwang kinakain ng sariwa.',
      ],

      Basil: 'Basil',
      basilDescription:
        'Ang halaman ng basil ay lumalaki mula sa isang makapal na ugat at may malasutlang berde sa tapat ng mga hugis-itlog na dahon, na lumalaki sa 1.2-4.3 pulgada ang haba, na sumasanga mula sa gitnang tangkay. Ang halaman ay gumagawa ng maliliit, puting bulaklak na nakakumpol sa isang tuhog sa tuktok ng halaman.',
      basilBenefits:
        'Ang mahahalagang langis ay maaaring makuha mula sa mga dahon at ginagamit sa mga pampaganda, mga produkto ng ngipin, at pabango.',
      basilFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      basilUses: [
        'Ang mga dahon ay ginagamit na sariwa o tuyo upang lasahan ang mga karne, isda, salad, at mga sarsa.',
      ],

      Mint: 'Mint',
      mintDescription:
        'Ang mga halaman ng mint ay pangunahing mga mabangong perennial, at nagtataglay sila ng mga tuwid, sumasanga na mga tangkay at pahaba hanggang ovate o hugis sibat na mga dahon na nakaayos sa magkasalungat na pares sa mga tangkay. Ang mga dahon ay madalas na natatakpan ng maliliit na buhok at may may ngipin na gilid. Ang mga halaman ng mint ay gumagawa ng isang terminal na spike ng bulaklak, at ang mga bulaklak ay maaaring puti o lila sa kulay, depende sa uri.',
      mintBenefits: '',
      mintFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      mintUses: [
        'Ang mga dahon ng mint ay ginagamit, sariwa o tuyo, upang gumawa ng mga tsaa, jam, at panghimagas.',
        'Ang mahahalagang langis ay maaaring makuha mula sa mga dahon at ginagamit bilang pampalasa.',
      ],

      Oregano: 'Oregano',
      oreganoDescription:
        'Ang mga halamang oregano ay maaaring woody o herbaceous at nagtataglay ng maramihang sumasanga na mga tangkay. Ang mga dahon ay hugis-itlog o bilog at nakaayos nang salit-salit sa mga tangkay. Ang mga halaman ay gumagawa ng maliliit na rosas, lila, o puting bulaklak at maliliit, hugis-itlog, kayumangging mga bunga.',
      oreganoBenefits: '',
      oreganoFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      oreganoUses: [
        'Ang mga dahon ng halaman ng oregano ay ginagamit na sariwa o tuyo bilang halamang gamot sa pagluluto. Maaari din silang tuyo at gamitin upang kunin ang mahahalagang langis, na ginagamit sa mga sabon o bilang pampalasa sa mga alak at liqueurs.',
      ],

      Lemongrass: 'Tanglad',
      lemongrassDescription:
        'Ang damo ay tumutubo sa makakapal na kumpol at may ilang matigas na tangkay at payat na parang talim na dahon na nakalalay patungo sa mga dulo. Ang mga dahon ay asul-berde ang kulay, nagiging pula sa taglagas, at naglalabas ng malakas na halimuyak ng lemon kapag nasira. Ang tanglad ay gumagawa ng malalaking tambalang bulaklak sa mga spike kapag lumaki sa tropics.',
      lemongrassBenefits: '',
      lemongrassFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      lemongrassUses: [
        'Ang mga tangkay (mga base ng dahon) ng halaman ay karaniwang ginagamit sa pampalasa ng mga pagkain.',
        'Ang puso ng mga batang sanga ay maaaring lutuin at kainin bilang isang gulay.',
        'Ang mas matigas na dahon ay ginagamit sa pampalasa ng mga putahe ngunit kadalasang inaalis bago ihain.',
        'Ang mga dahon ay maaari ding gamitin sa paggawa ng lemon grass tea.',
        'Ang mahahalagang langis na nakuha mula sa mga dahon ay karaniwang ginagamit sa mga insect repellents, pabango, at sabon.',
      ],

      ScrewPine: 'Pandan',
      screwPineDescription:
        'Iba-iba ang laki ng mga pandan mula sa maliliit na palumpong hanggang sa katamtamang laki ng mga puno, karaniwang may malawak na canopy, mabigat na bunga, at katamtamang bilis ng paglaki. Ang mga mature na halaman ay maaaring magkaroon ng mga sanga. Depende sa species, ang trunk ay maaaring makinis, magaspang, o kulugo. Ang mga ito ay karaniwang may maraming makapal na stilt roots malapit sa base, na nagbibigay ng suporta habang ang puno ay lumalaki nang napakabigat na may mga dahon, bunga, at mga sanga.',
      screwPineBenefits: '',
      screwPineFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      screwPineUses: [],

      Turmeric: 'Luyang Dilaw',
      turmericDescription:
        'Ang luyang dilaw ay naglalaman ng kemikal na tinatawag na curcumin, na maaaring mabawasan ang pamamaga at may mainit at mapait na lasa.',
      turmericBenefits: '',
      turmericFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      turmericUses: [
        'Ang turmeric powder ay karaniwang ginagamit bilang pangkulay at pampalasa, lalo na para sa mga kari.',
      ],

      Coriander: 'Coriander',
      corianderDescription:
        'Ang mga dahon ng halaman ay pabagu-bago sa hugis, malawak na lobed sa base ng halaman, at payat at mabalahibo na mas mataas sa mga namumulaklak na tangkay. Ito ay isang malambot at walang buhok na halaman. Ang mga bulaklak ay ginawa sa maliliit na umbel at puti o napakaputlang rosas ang kulay, na ang mga petals ay nakaturo palayo sa gitna ng umbel na mas mahaba kaysa sa mga nakaturo dito. Ang halaman ay gumagawa ng isang hugis-itlog na bunga na dilaw-kayumanggi ang kulay at naglalaman ng dalawang buto.',
      corianderBenefits: '',
      corianderFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      corianderUses: [
        'Ang lahat ng bahagi ng halamang coriander ay nakakain, ngunit ang mga sariwang dahon at ang mga tuyong buto ay kadalasang ginagamit.',
        'Ang mga dahon at buto ay ginagamit sariwa o tuyo bilang mga halamang gamot sa pagluluto.',
      ],

      Parsley: 'Perehil',
      parsleyDescription:
        'Ang perehil ay isang mabangong halaman na may isang tuwid na gawi sa paglaki na nagtataglay ng mga sanga, guwang na mga tangkay at madilim na berdeng patag o kulot na mga dahon na nakaayos nang halili sa mga tangkay. Ang mga dahon ay bumubuo ng isang rosette sa mga mas batang halaman. Ang halaman ay gumagawa ng maliliit, dilaw na bulaklak sa mga umbel.',
      parsleyBenefits: '',
      parsleyFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      parsleyUses: [
        'Ang mga dahon ng perehil ay ginagamit na sariwa o tuyo bilang isang halamang pang-culinary.',
        'Ang mga sariwang dahon ay karaniwang ginagamit din bilang palamuti.',
        'Ang ugat ng ilang mga cultivars ay nakakain at maaaring kainin bilang isang gulay.',
        'Ang mahahalagang langis ay maaaring makuha mula sa mga bulaklak ng perehil at ginagamit bilang pampalasa.',
      ],

      Rosemary: 'Romero',
      rosemaryDescription:
        'Ang halamang rosemary ay karaniwang tuwid sa ugali ng paglago at may mga sanga at kahoy na mga tangkay na may mga buntot ng mga dahon. Ang mga dahon ay kabaligtaran at kadalasang parang talim at makintab na berde. Ang halaman ay gumagawa ng mga kumpol ng 5-10 asul, lila, o kulay-rosas na mga bulaklak sa maikling lateral na mga sanga at maliliit na hugis-itlog na bunga.',
      rosemaryBenefits: '',
      rosemaryFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      rosemaryUses: [
        'Ang mga dahon ng rosemary ay maaaring gamitin sariwa o tuyo bilang isang herb sa pagluluto o sa mga salad.',
        'Ang mga dahon at bulaklak ay maaaring gamitin upang kunin ang langis ng rosemary, na ginagamit bilang pampalasa o bilang pabango sa mga sabon at mga produktong pambahay.',
      ],

      AloeVera: 'Aloe Vera',
      aloeVeraDescription:
        'Ang halaman ng aloe vera ay may isang maikli matatag na tangkay at isang rosette ng mataba hugis lansyulato na dahon, na may serrated margin ng maliliit na puting ngipin. Ang mga dahon ay maaaring may batik na puti at maputlang berde o kulay abo-berde.',
      aloeVeraBenefits:
        'Ang mga halaman ng aloe vera ay pinalaki para sa nakapagpapagaling na halaga, kabilang ang pagpapabuti ng panunaw at pagpapalakas ng immune system. Naglalaman din ang mga ito ng bitamina A (beta-carotene), C, at E, na mga antioxidant. Naglalaman din ito ng bitamina B12 at folic acid.',
      aloeVeraFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      aloeVeraUses: [
        'Ang gel ay karaniwang ginagamit din bilang isang lunas sa bahay para sa paggamot ng mga paso at upang maiwasan ang paninigas ng dumi.',
        'Ang gel ay ginagamit sa mga panghimagas, yogurt, at inumin.',
        'Ginagamit din ito bilang moisturizer ng balat at buhok.',
      ],

      SweetPotato: 'Kamote',
      sweetPotatoDescription:
        'Ang mga baging ng kamote, na kilala sa hugis pusong lobed na mga dahon at kaakit-akit na puti o lilac na mga bulaklak, ay maaaring umabot ng hanggang 13 talampakan sa isang panahon ng paglaki. Ang mga tuber ay dumating sa isang kamangha-manghang hanay ng mga hugis at kulay, mula pula, dilaw, kayumanggi, at puti hanggang sa maging kulay-ube.',
      sweetPotatoBenefits:
        'Ang kamote ay naglalaman ng bitamina A, B1, B3, B5, B6, at C, pati na rin ang mga nutrisyon tulad ng beta-carotene, carotenoid, copper, fiber, iron, manganese, phosphorus, potassium, at zinc.',
      sweetPotatoFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      sweetPotatoUses: [
        'Ang mga tuber ng kamote ay kinakain ng hilaw bilang gulay o pinoproseso sa harina o almirol.',
        'Ang mga dahon ay maaaring kainin ng hilaw o luto.',
      ],

      Potato: 'Patatas',
      potatoDescription:
        "Ang halaman ng patatas ay may sanga na tangkay at mga dahon na binubuo ng mga dahon na parehong hindi pantay sa laki at hugis at maaaring maging hugis-itlog hanggang pahaba ang hugis. Ang mga dahon ay maaaring umabot ng hanggang 10-30 cm ang haba. Ang mga tuber ay lumalaki nang humigit-kumulang 25 cm sa ilalim ng lupa sa lupa at maaaring dilaw, pula, o lila, depende sa iba't. Ang halaman ng patatas ay gumagawa ng puti o asul na mga bulaklak at dilaw-berdeng berry.",
      potatoBenefits:
        'Ang patatas ay naglalaman ng bitamina B3, B6, B9, at C, pati na rin ang mga nutrisyon tulad ng calcium, carotenoid, fiber, flavonoid, magnesium, manganese, phenolic acid, phosphorus, at potassium.',
      potatoFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      potatoUses: [
        'Maaaring hiwain ang patatas at gawing potato chips o fries.',
        'Ang patatas ay maaari ding iproseso sa almirol, alkohol, o harina.',
      ],

      Taro: 'Gabi',
      taroDescription:
        'Ang halaman ng gabi ay hindi madalas namumulaklak, dahil ang pangunahing paraan ng pagpaparami nito ay asexual sa pamamagitan ng paggawa ng corm. Ang mga tangkay ng taro ay mahaba, at ang mga dahon ay malalaki at hugis puso, na may mga kulay mula berde hanggang lila.',
      taroBenefits: '',
      taroFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      taroUses: [],

      PurpleYam: 'Ube',
      purpleYamDescription:
        "Ang mga tubers ng ube ay karaniwang matingkad na violet na lila hanggang sa matingkad na lavender na kulay, ngunit may iba't ibang kulay mula cream hanggang payak na puti.",
      purpleYamBenefits: '',
      purpleYamFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      purpleYamUses: [
        'Ang ube ay ginagamit sa pampalasa ng mga ice cream, cake, pastry, at tradisyonal na mga panghimagas ng Filipino tulad ng halo-halo.',
      ],

      Carrot: 'Karot',
      carrotDescription:
        'Ang halaman ng karot ay gumagawa ng isang rosette ng 8-12 dahon sa itaas ng lupa at isang mataba na conical taproot sa ilalim ng lupa. Ang halaman ay gumagawa ng maliliit (2 mm) na mga bulaklak na puti, pula, o lila ang kulay. Ang ugat ay maaaring lumaki sa pagitan ng 2.0 at 20 pulgada ang haba at umabot sa 2.0 pulgada ang lapad.',
      carrotBenefits:
        'Ang karot ay naglalaman ng bitamina A, B6, B7, C, at K1, pati na rin ang mga nutrisyon tulad ng beta-carotene, fiber, at potassium.',
      carrotFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      carrotUses: [
        'Ang mga ugat ng karot ay kinakain bilang gulay at maaaring kainin nang sariwa o niluto.',
        'Ang mga dahon ng halaman ay maaaring gamitin bilang pagkain ng mga hayop.',
      ],

      Garlic: 'Bawang',
      garlicDescription:
        "Ang bawang ay isa sa mga pinaka ginagamit na pananim sa mga nilinang Allium species. Ito ay isang perennial na namumulaklak na halaman na tumutubo mula sa isang bulb na naglalaman ng mga panlabas na hibla ng manipis, mapuputing kaluban o balat na nakapaloob sa iba't ibang lobe na kilala bilang cloves. Ang isang bulb ng bawang ay maaaring maglaman ng 10 hanggang 20 nakakain na mga clove na walang simetriko sa hugis, maliban sa mga maliliit, na malapit sa gitna. Ang mga clove, na natatakpan din ng proteksiyon na maputing balat, ay may natatanging amoy.",
      garlicBenefits:
        'Ang bawang ay naglalaman ng bitamina B6 at C, pati na rin ang mga nutrisyon tulad ng fiber, manganese, at selenium.',
      garlicFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      garlicUses: [
        'Pangunahing ginagamit ang bawang para sa pampalasa ng pagkain at maaaring patuyuin, giling, o pulbos.',
        'Ginagamit din ang bawang sa mga marinade at rub para sa mga karne, pagkaing-dagat, at mga gulay.',
      ],

      Onion: 'Sibuyas',
      onionDescription:
        'Ang halaman ng sibuyas ay gumagawa ng kulay rosas o puting mga kumpol ng bulaklak sa mga tangkay nito. Ang mga bunga ay nabuo sa itaas lamang ng patag na tangkay ng halaman sa pamamagitan ng magkakapatong na mga dahon. Ang bulb ay binubuo ng mga hibla, na ang bawat isa ay tumutugma sa isang dahon. Karaniwang hugis-itlog ang mga ito, ngunit maaaring mag-iba ang kanilang hugis, at lumilitaw ang mga ito sa mga kumpol ng 318 bawat halaman. Ito ay natatakpan ng isang lamad na nagiging papel na amerikana.',
      onionBenefits:
        'Ang sibuyas ay naglalaman ng bitamina B6 at C, pati na rin ang mga nutrisyon tulad ng antioxidants, copper, fiber, manganese, at potassium.',
      onionFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      onionUses: [
        "Ang bunga ay isang nakakain na gulay at ang pinakakaraniwang ginagamit na bahagi ng sibuyas. Karaniwang kinakain ito pagkatapos magluto, bagama't maaari itong kainin nang sariwa.",
      ],

      Radish: 'Labanos',
      radishDescription:
        'Ang halaman ng labanos ay may maikli, mabalahibong tangkay at isang rosette (pantay sa lupa, pahalang, at pabilog na dahon) ng mga dahong pahaba na may sukat na 2-12 pulgada ang haba. Ang mga tuktok na dahon ng halaman ay mas maliit at parang sibat. Ang ugat ng halaman ay cylindrical o tapering at karaniwang pula o puti ang kulay. Ang halamang labanos ay gumagawa ng maramihang mga lilang o kulay-rosas na bulaklak sa mga racemes, na gumagawa ng 2-12 buto.',
      radishBenefits:
        'Ang labanos ay naglalaman ng bitamina B1, B2, B3, B6, B9, C, at K, pati na rin ang mga nutrisyon tulad ng iron, manganese, at potassium.',
      radishFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      radishUses: [
        'Ang ugat ng labanos ay maaaring kainin nang sariwa sa mga salad o lutuin kasama ng iba pang sangkap, tulad ng karne.',
        'Ang mga dahon ng halaman ay nakakain din at maaaring gamitin bilang isang salad green.',
      ],

      Jicama: 'Singkamas',
      jicamaDescription:
        'Ang mga singkamas ay nagtataglay ng mga tuwid na tangkay at 8-12 dahon na bumubuo ng isang korona. Ang mga dahon ay mapusyaw na berde ang kulay, mabalahibo, at manipis. Ang halaman ay gumagawa ng mapusyaw na dilaw na mga bulaklak, na nakakumpol sa tuktok ng isang raceme at kadalasang pinalawak sa itaas ng mga terminal buds. Ang mga dahon ay maaaring umabot sa 12-14 pulgada ang haba, habang ang sumasanga na mga tangkay ng bulaklak ay maaaring umabot sa 12-36 pulgada. Ang ugat ng halaman ay isang bulbous tuber, halos perpektong bilog, na kadalasang pinaghalong lila, puti, at dilaw.',
      jicamaBenefits: '',
      jicamaFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      jicamaUses: [
        'Ang singkamas ay kinakain bilang gulay pagkatapos lutuin.',
        'Ang mga sanga at dahon ay maaaring kainin nang sariwa sa mga salad, o ang buong halaman ay maaaring gamitin bilang pagkain para sa mga hayop.',
      ],

      Ginger: 'Luya',
      gingerDescription:
        "Ang rhizome ng luya ay kayumanggi, na may corky na panlabas na layer at isang maputla-dilaw na mabangong sentro. Ang sanga sa itaas ng lupa ay tuwid at parang tambo, na may mga linear na dahon na nakaayos nang halili sa tangkay. Ang mga sanga ay nagmula sa maraming base at bumabalot sa isa't isa. Ang mga dahon ay maaaring umabot sa 2.75 pulgada ang haba at 0.7 pulgada ang lapad. Ang mga namumulaklak na ulo ay dinadala sa mas maikling mga tangkay, at ang halaman ay gumagawa ng hugis-kono, maputlang dilaw na mga bulaklak.",
      gingerBenefits: '',
      gingerFertilizers: [
        'Dumi ng manok',
        'Dumi ng kabayo',
        'Dumi ng baka',
        'Dumi ng kambing',
        'Dumi ng kuneho',
      ],
      gingerUses: [
        'Ang luya ay sikat na ginagamit bilang pampalasa sa pagluluto at maaaring gamitin sariwa, tuyo, o pulbos.',
        'Ang sariwang rhizome ay maaaring gamitin upang kunin ang mahahalagang langis ng luya.',
        'Ang luya ay maaari ding gamitin sa pampalasa ng mga inumin.',
      ],

      // 100% Okay
      Spacing: 'Pagitan',
      Depth: 'Lalim',
      seed: 'na buto',
      seeds: 'na buto',
      Seedperpit: 'Binhi bawat hukay',
      Height: 'Taas',
      Water: 'Tubig',
      Sun: 'Araw',
      Season: 'Panahon',
      Trellis: 'Balag',
      Germination: 'Pagsibol',
      Sprouttoharvest: 'Pagsibol hanggang pag-ani',
      Fullsun: 'Buong araw',
      Shade: 'Lilim',
      week: 'linggo',
      days: 'araw',

      // 100% Okay
      spacingDesc:
        'Kung lalaki mula sa buto, ang mga buto ng {{cropName}} ay dapat na {{cropSpacing}} ang pagitan sa mga hanay.',
      depthDesc:
        'Tiyakin na ang mga buto ng {{cropName}} ay nakakatanggap ng sapat na kahalumigmigan upang sumibol sa pamamagitan ng pagtatanim sa kanila sa lalim na {{cropDepth}} sa lupa.',
      seedPerPit:
        'Ang direktang pagtatanim ng {{cropSeedPerPit}} sa bawat hukay ay karaniwang ginagawa.',
      waterDesc:
        'Ang {{cropName}} ay nangangailangan ng {{cropWater}} ng tubig bawat linggo, depende sa panahon.',
      perennialSeasonDesc:
        'Ang {{cropName}} ay lalago ng pangmatagalan at babalik taon-taon.',
      seasonDesc:
        'Ang {{cropName}} ay lalago nang maayos sa {{cropSeason}} na panahon.',
      sunDesc: '{{cropSun}} ang mabuti para sa mga halamang {{cropName}}.',
      trellisDesc:
        'Ang balag ay dapat hindi bababa sa {{cropTrellis}} ang taas upang suportahan ang halamang {{cropName}}.',
      heightDesc:
        'Ang mga halamang {{cropName}} ay maaaring lumaki ng hanggang {{cropHeight}} ang taas.',
      germinationDesc:
        'Karaniwang tumatagal ng {{cropGermination}} bago sumibol ang mga buto ng {{cropName}} pagkatapos itanim.',
      sproutToHarvestDesc:
        'Pagkatapos ng pagsibol, karaniwang tumatagal ng mga {{cropSproutToHarvest}} para maging handa ang isang {{cropName}} para sa pag-aani.',

      inch: 'pulgada',
      inches: 'pulgada',

      // 100% Okay
      quickInfo: 'Maikling Impormasyon',
      fertilizers: 'Pataba',
      uses: 'Gamit',
      Pests: 'Mga peste',
      Diseases: 'Mga sakit',
      Beneficial: 'Kapaki-pakinabang',
      noSpeciesFoundForThisCrop:
        'Walang nakitang {{species}} para sa pananim na ito',
      noBenefitsFound: 'Walang nakitang benepisyo para sa pananim na ito',
      noUsesFound: 'Walang nakitang gamit para sa pananim na ito',

      // ---------- Species Info Module ----------
      Aphids: 'Apido',
      BeanPodBorer: 'Bean Pod Borer',
      BeetArmyworm: 'Beet Armyworm',
      ChineseRoseBeetle: 'Chinese Rose Beetle',
      ColoradoPotatoBeetle: 'Colorado Potato Beetle',
      CornEarworm: 'Corn Earworm',
      CucumberBeetles: 'Cucumber Beetle',
      Cutworms: 'Cutworm',
      DiamondbackMoth: 'Diamondback Moth',
      FleaBeetles: 'Flea Beetle',
      Grasshoppers: 'Tipaklong',
      Hornworms: 'Hornworm',
      JapaneseBeetle: 'Salaginto',
      LargeCabbageWhite: 'Large White',
      Leafhopper: 'Leafhopper',
      Leafminers: 'Leafminer',
      Leafroller: 'Leafroller',
      Loopers: 'Looper',
      Maggot: 'Maggot',
      Mealybugs: 'Mealybug',
      MexicanBeetle: 'Mexican Bean Beetle',
      PepperLaceBug: 'Pepper Lace Bug',
      PerseaMites: 'Persea Mite',
      RhinocerosBeetle: 'Rhinoceros Beetle',
      RustFly: 'Carrot Rust Fly',
      ScaleInsects: 'Scale Insect',
      Skipper: 'Skipper',
      Slugsandsnails: 'Slug and Snail',
      SpiderMites: 'Spider Mite',
      SpinachCrownMite: 'Spinach Crown Mite',
      SpottedLadyBeetle: 'Spotted Lady Beetle',
      SquashBug: 'Squash Bug',
      SquashVineBorer: 'Squash Vine Borer',
      Stinkbugs: 'Stink Bug',
      Thrips: 'Hanip',
      TreeBorer: 'Tree Borer',
      Weevil: 'Bukbok',
      Whiteflies: 'Whitefly',
      WhiteGrub: 'White Grub',
      Wireworms: 'Wireworm',

      AlternariaLeafSpot: 'Alternaria Leaf Spot',
      AngularLeafSpot: 'Angular Leaf Spot',
      Anthracnose: 'Anthracnose',
      BacterialCanker: 'Bacterial Canker',
      BacterialLeafSpot: 'Bacterial Leaf Spot',
      BacterialRingRot: 'Bacterial Ring Rot',
      BacterialSpot: 'Bacterial Spot',
      BlackRot: 'Black Rot',
      BlackSigatoka: 'Black Sigatoka',
      BlackSpot: 'Itim na batik',
      BlossomEndRot: 'Blossom-end Rot',
      BuckeyeRot: 'Buckeye Rot',
      BunchyTop: 'Bunchy Top',
      CercosporaLeafBlight: 'Cercospora Leaf Blight',
      CercosporaLeafSpot: 'Cercospora Leaf Spot',
      CigarEndRot: 'Cigar End Rot',
      CitrusCanker: 'Citrus Canker',
      Clubroot: 'Clubroot',
      CottonyRot: 'Cottony Rot',
      DampingOff: 'Damping-off',
      DownyMildew: 'Downy Mildew',
      EarlyBlight: 'Early Blight',
      FusariumWilt: 'Fusarium Wilt',
      GrayLeafBlight: 'Gray Leaf Blight',
      GrayMold: 'Gray Mold',
      GummyStemBlight: 'Gummy Stem Blight',
      LateBlight: 'Late Blight',
      MosaicVirus: 'Mosaic Virus',
      PhytophthoraBlight: 'Phytophthora Blight',
      PhytophthoraFruitRot: 'Phytophthora Fruit Rot',
      PowderyMildew: 'Powdery Mildew',
      PythiumFruitRot: 'Pythium Fruit Rot',
      RootKnotNematode: 'Root Knot Nematode',
      RootRot: 'Root Rot',
      Rust: 'Kalawang',
      SootyMold: 'Sooty Mold',
      Sunblotch: 'Sunblotch',
      TomatoSpottedWilt: 'Tomato Spotted Wilt',
      VerticilliumWilt: 'Verticillium Wilt',
      WhiteMold: 'White Mold',

      AssassinBugs: 'Assassin Bug',
      Bees: 'Bubuyog',
      Birds: 'Ibon',
      Butterflies: 'Paru-paro',
      Earthworms: 'Bulate',
      Flies: 'Langaw',
      GroundBeetles: 'Salagubang Lupa',
      Lacewings: 'Lacewing',
      Ladybugs: 'Kulisap',
      Spiders: 'Gagamba',
      Wasps: 'Braconid na putakti',

      // 100% Okay
      aphidsIdentification:
        'Ang mga matatandang apido ay maliliit, hugis peras na mga insekto na maaaring kulay berde, itim, kayumanggi, o rosas at karaniwang makikita sa mga dahon ng halaman. Ang kanilang mga nymph ay mas maliit at walang pakpak.',
      armywormIdentification:
        'Ang mga higad ng armyworm ay maaaring berde o kayumanggi na may mga guhit sa kanilang mga katawan. Ang mga matatanda ay mga gamu-gamo na may haba ng pakpak na 1.5 hanggang 2 pulgada at kayumangging pakpak na may mga itim na batik.',
      beanPodBorerIdentification:
        'Ang mga higad ng bean pod borer ay maaaring maging kulay kremang puti o rosas at kadalasang matatagpuan sa loob ng mga balat ng bean. Ang mga matatanda ay mga gamu-gamo na may humigit-kumulang 1 pulgadang haba ng pakpak at kayumanggi at kulay abong mga pakpak.',
      beetArmywormIdentification:
        'Ang mga higad ng beet armyworm ay maaaring kulay berde o kayumanggi na may mga guhit sa katawan. Ang mga matatanda ay mga gamu-gamo na may 1.5 pulgadang lawak ng pakpak, kayumanggi na may mga guhit na mapusyaw ang kulay.',
      chineseRoseBeetleIdentification:
        'Ang mga matandang Chinese rose beetle ay maliit hanggang katamtaman ang laki at maaaring maitim na kayumanggi o mapula-pulang kayumanggi ang kulay. Ang kanilang mga larba ay puti at nagiging hugis C kapag nabalisa; sila ay karaniwang matatagpuan sa ilalim ng lupa.',
      coloradoPotatoBeetleIdentification:
        'Ang mga matandang Colorado potato beetle ay mga bilugan na salagubang na may dilaw at itim na guhit sa kanilang mga takip ng pakpak, mga 0.5 pulgada ang haba. Ang kanilang mga larba ay maaaring kulay kahel o mapula-pula na may mga itim na batik.',
      cornEarwormIdentification:
        'Ang mga matatandang corn earworm ay mga gamu-gamo na may dilaw o medyo kayumangging pakpak na may mga guhit. Ang kanilang mga larba ay maaaring kulay berde, kayumanggi, o medyo rosas at kadalasang matatagpuan sa loob ng mga tainga ng mais.',
      cucumberBeetlesIdentification:
        'Ang mga matatandang cucumber beetle ay maliliit, hugis itlog na mga salagubang na maaaring kulay berde o dilaw na may mga itim na batik o guhit. Ang kanilang larba ay puti, parang uod, bihirang makita, at matatagpuan sa ilalim ng lupa.',
      cutwormsIdentification:
        'Ang mga higad ng cutworm ay maaaring kulay abo o kayumanggi, may mga pattern, at nagiging hugis C kapag nabalisa. Ang mga matatanda ay mga gamu-gamo na may humigit-kumulang 1.5 pulgadang lawak ng pakpak, kadalasang kayumanggi o kulay abo na may mga pattern.',
      diamondbackMothIdentification:
        'Ang mga diamondback moth ay maliit, na may humigit-kumulang 0.5 pulgada ang lawak ng pakpak, at may mga pattern na hugis brilyante sa kanilang mga pakpak. Ang kanilang larba ay maliliit na higad na maaaring kulay berde o dilaw na may mga markang hugis brilyante sa kanilang likod.',
      fleaBeetlesIdentification:
        'Ang mga matatandang flea beetle ay maliit, tumatalon kapag nabalisa, at may makintab na itim o metal na kulay na mga 0.1 pulgada ang haba. Ang kanilang larba ay puti, parang uod, at kadalasang matatagpuan sa mga tangkay o ugat ng halaman.',
      grasshoppersIdentification:
        'Ang mga matatandang tipaklong ay malalaking insekto na may mahahabang binti sa hulihan na ginagamit sa pagtalon at maaaring berde o kayumanggi ang kulay. Ang kanilang mga nymph ay mas maliliit na bersyon ng mga matatanda at walang pakpak.',
      hornwormsIdentification:
        'Ang mga higad ng hornworm ay malalaki at berde, na may parang sungay na projection sa kanilang likuran. Ang mga matatanda ay mga gamu-gamo na may humigit-kumulang 4 na pulgadang lawak ng pakpak, karaniwang berde na may mga pattern na kayumanggi o kulay abo.',
      japaneseBeetleIdentification:
        'Ang mga matandang Japanese beetle ay metalikong berde na may tansong kayumanggi na pakpak na mga 0.5 pulgada ang haba. Ang kanilang larba ay puti at nagiging hugis C kapag nabalisa, na may kayumangging ulo.',
      largeCabbageWhiteIdentification:
        'Ang mga matandang large cabbage white ay mga puting paru-paro na may mga itim na batik sa kanilang mga pakpak; ang mga lalaki ay may isang itim na batik, habang ang mga babae ay may dalawa. Ang kanilang larba ay berdeng higad na may maliliit na dilaw at itim na batik.',
      leafhopperIdentification:
        'Ang mga matatandang leafhopper ay maliliit, hugis kalso na mga insekto na maaaring kulay berde, dilaw, o kayumanggi na may malalaking binti sa hulihan. Ang kanilang mga nymph ay walang pakpak at maputlang berde ang kulay.',
      leafminersIdentification:
        'Ang mga matatandang leafminer ay maliliit, parang langaw na mga insekto na may makintab na kulay. Ang kanilang larba ay maliit at parang maggot.',
      leafrollerIdentification:
        'Ang mga higad ng leafroller ay maliit at maaaring berde, kayumanggi, o medyo rosas ang kulay. Ang mga matatanda ay mga gamu-gamo na may 0.5 hanggang 1 pulgadang lawak ng pakpak, kadalasang kayumanggi o kulay abo na may nakatiklop na mga pakpak.',
      loopersIdentification:
        'Ang mga higad ng looper ay gumagalaw sa isang loop na paraan habang sila ay gumagapang. Ang mga matatanda ay mga gamu-gamo na may humigit-kumulang 1.5 pulgadang lawak ng pakpak at may mga pattern.',
      maggotIdentification:
        "Ang mga larba ng mga maggot ay maliit, puti, at parang uod. Ang mga matatanda ay langaw na may iba't ibang hitsura, kadalasang kulay abo.",
      mealybugsIdentification:
        'Ang mga matatandang mealybug ay maliliit, puting insekto na karaniwang matatagpuan sa mga tangkay at dahon ng halaman. Ang kanilang mga nymph ay mas maliit kumpara sa mga matatanda.',
      mexicanBeetleIdentification:
        'Ang mga matandang Mexican beetle ay mga bilugan na salagubang na may kulay kahel na dilaw at mga itim na batik, mga 0.3 pulgada ang haba. Ang kanilang larba ay maaaring kulay kahel o pula na may mga itim na batik.',
      pepperLaceBugIdentification:
        'Ang mga matatandang pepper lace bug ay maliliit, mapula-pulang kayumangging mga insekto na may mga pakpak na parang puntas. Ang kanilang mga nymph ay maliliit, walang pakpak na mga insekto na mapula-pulang kayumanggi rin ang kulay.',
      perseaMitesIdentification:
        'Ang mga nymph ng persea mite ay maliliit, hugis itlog na mite, kadalasang mamula-mula o kahel ang kulay. Ang mga matatanda ay mas malaki kumpara sa mga nymph.',
      rhinocerosBeetleIdentification:
        'Ang mga matandang rhinoceros beetle ay malaki na may sungay sa kanilang mga ulo, kadalasang itim o maitim na kayumanggi ang kulay. Ang kanilang larba ay malaki, puti, at nagiging hugis C kapag nabalisa, na may kayumangging ulo.',
      rustFlyIdentification:
        'Ang mga matatandang carrot rust fly ay maliliit, mapula-pulang kayumanggi na langaw. Ang kanilang larba ay maliliit, puting maggot na karaniwang matatagpuan sa loob ng mga tisyu ng halaman.',
      scaleInsectsIdentification:
        'Ang mga matatandang scale insect ay maliliit, hindi kumikibo na mga insekto na may matigas na shell, kadalasang matatagpuan sa mga tangkay ng halaman. Ang kanilang mga nymph ay mas maliit at walang shell.',
      skipperIdentification:
        "Ang mga matatandang skipper ay mga gamu-gamo na matipuno ang katawan, mabilis lumipad, at may iba't ibang kulay at pattern. Ang kanilang larba ay mga higad na maaaring berde o kayumanggi ang kulay.",
      slugsAndSnailsIdentification:
        'Ang mga slug at snail ay malambot ang katawan, mga mollusk na naninirahan sa lupa na maaaring kulay abo, itim, kahel, kayumanggi, o kulay tan. Ang mga slug ay walang mga shell, habang ang mga snail ay mayroon, at parehong nag-iiwan ng malagkit na bakas.',
      spiderMitesIdentification:
        'Ang mga matandang spider mite ay napakaliit, may walong paa, maaaring kulay pula o berde, at karaniwang matatagpuan sa ilalim ng mga dahon ng halaman. Ang kanilang mga nymph ay mas maliit kumpara sa mga matatanda.',
      spinachCrownMiteIdentification:
        'Ang mga matandang spinach crown mite ay napakaliit, hugis itlog na mite, kadalasang medyo pula o kahel ang kulay. Ang kanilang mga nymph ay mas maliit kumpara sa mga matatanda.',
      squashBugIdentification:
        'Ang mga matatandang squash bug ay maaaring kulay kayumanggi o medyo kulay abo na may hugis kalasag na katawan na humigit-kumulang 0.75 pulgada ang haba. Ang kanilang mga nymph ay mas maliit at maaaring kulay berde, kayumanggi, o walang pakpak.',
      squashVineBorerIdentification:
        'Ang mga larba ng squash vine borer ay kulay puti, parang uod, na may kayumangging ulo, at karaniwang matatagpuan sa loob ng mga tangkay ng kalabasa. Ang mga matatanda ay mga gamu-gamo na may humigit-kumulang 1.5 pulgadang lawak ng pakpak at may mga kulay kahel at itim na guhit sa kanilang tiyan.',
      stinkbugsIdentification:
        'Ang mga matatandang stink bug ay mga insektong hugis kalasag na maaaring kulay berde, kayumanggi, o kulay abo at naglalabas ng mabahong amoy kapag nabalisa. Ang kanilang mga nymph ay maliit at walang pakpak.',
      thripsIdentification:
        'Ang mga matandang thrip ay napakaliit, payat na mga insekto na may palawit na pakpak, kadalasang dilaw, kayumanggi, o itim ang kulay. Ang kanilang mga nymph ay mas maliit at walang pakpak.',
      treeBorerIdentification:
        'Ang larba ng tree borer ay maaaring puti o parang alambre ang kulay, at karaniwang matatagpuan sa loob ng kahoy. Ang mga matatanda ay mga salagubang na may cylindrical o pahabang katawan, kadalasang kayumanggi o itim ang kulay.',
      weevilIdentification:
        'Ang mga matatandang weevil ay maliliit na salagubang na may mahaba, matitigas na nguso, kadalasang kayumanggi o itim ang kulay. Ang kanilang larba ay kulay puti, nagiging hugis C kapag nabalisa, at kumakain sa loob ng mga tisyu o buto ng halaman.',
      whitefliesIdentification:
        'Ang mga matatandang whitefly ay maliliit, puti, may pakpak na mga insekto, kadalasang matatagpuan sa ilalim ng mga dahon.',
      whiteGrubIdentification:
        'Ang larba ng white grub ay kulay puti at nagiging hugis C kapag nabalisa. Sila ay karaniwang matatagpuan sa ilalim ng lupa. Ang mga matatanda ay mga salagubang na maaaring kayumanggi o mapula-pula ang kulay.',
      wirewormsIdentification:
        'Ang larba ng wireworm ay payat at maaaring puti o dilaw ang kulay. Ang mga ito ay karaniwang matatagpuan sa mga ugat ng halaman at tubers. Ang mga matatanda ay mga salagubang na may matitigas at karaniwang makintab na katawan.',

      // 100% Okay
      aphidsDamage:
        'Sinisipsip nila ang katas mula sa mga halaman, na nagiging sanhi ng pamumula at pagkulot ng mga dahon. Nag-iiwan din sila ng malagkit na substansiya na tinatawag na honeydew na umaakit ng itim na amag at langgam.',
      armywormDamage:
        'Ang mga higad ng armyworm ay ngumunguya sa mga dahon, tangkay, at bunga ng mga halaman, na maaaring magdulot ng malaking pinsala.',
      beanPodBorerDamage:
        'Ang mga higad ng bean pod borer ay gumagawa ng mga butas sa beans at pumapasok sa mga butas na ito upang kainin at sirain ang mga buto sa loob.',
      beetArmywormDamage:
        'Ang mga higad ng beet armyworm ay ngumunguya sa mga dahon, tangkay, at bulaklak ng mga halaman, na maaaring magdulot ng malaking pinsala, lalo na sa mga batang halaman, at maaari nilang sirain ang iyong mga pananim.',
      chineseRoseBeetleDamage:
        'Ang mga matatandang Chinese rose beetle ay kumakain sa mga dahon, na nagiging sanhi ng hindi regular na mga butas at pagbagsak ng mga dahon, habang ang kanilang larba ay kumakain sa mga ugat, na nagiging sanhi ng pinsala sa ugat at nagpapahina sa kalusugan ng halaman.',
      coloradoPotatoBeetleDamage:
        'Ang mga matatandang Colorado potato beetle at ang kanilang larba ay kumakain sa mga dahon, na nagiging sanhi ng hindi regular na mga butas, matinding pagbagsak ng dahon, at paghina ng kalusugan ng halaman.',
      cornEarwormDamage: '',
      cucumberBeetlesDamage:
        'Ang mga matatandang cucumber beetle ay kumakain sa mga dahon, bulaklak, at bunga, na nagiging sanhi ng pagkalanta ng mga halaman. Maaari rin silang magpadala ng mga sakit tulad ng bacterial wilt at mosaic virus.',
      cutwormsDamage:
        'Ang mga higad ng cutworm ay pinuputol ang mga batang punla sa antas ng lupa, na nagdudulot ng pagkamatay at pagbaba ng bilang ng halaman, lalo na sa mga inilipat na pananim.',
      diamondbackMothDamage:
        'Ang mga diamondback moth at kanilang larba ay kumakain sa mga dahon, na nagiging sanhi ng maliliit na butas at pagkasira ng tisyu sa mga halaman.',
      fleaBeetlesDamage:
        'Ang mga matatandang flea beetle at ang kanilang larba ay kumakain sa mga dahon, na nagiging sanhi ng maliliit na butas at maaaring magpahina sa mga halaman, lalo na sa mga batang halaman.',
      grasshoppersDamage:
        'Ang mga matatandang tipaklong at ang kanilang mga nymph ay kumakain sa mga dahon, tangkay, at bunga, na nagiging sanhi ng matinding pagkalaglag at pagkasira ng dahon.',
      hornwormsDamage:
        'Ang mga higad ng hornworm ay maaaring sirain ang mga dahon ng iyong halaman, na posibleng magdulot ng pinsala sa mga bunga nito.',
      japaneseBeetleDamage:
        "Ang mga matatandang Japanese beetle ay kumakain sa mga dahon, bulaklak, at bunga ng iba't ibang halaman, na nag-iiwan ng mga kalansay na dahon na nagdudulot ng malaking pinsala.",
      largeCabbageWhiteDamage:
        'Ang mga higad ng large cabbage white ay kumakain sa mga dahon, na nagiging sanhi ng pagbagsak ng dahon, paghinto ng paglaki, at pag-iiwan ng frass (mga dumi ng higad) na maaaring makapinsala sa mga halaman.',
      leafhopperDamage:
        'Ang mga matatandang leafhopper at ang kanilang mga nymph ay sumisipsip ng katas mula sa mga halaman, na nagiging sanhi ng mga tuldok-tuldok, paninilaw, pagkulot, at pagbagsak ng dahon. Maaari rin silang magpadala ng mga sakit tulad ng aster yellows at curly top virus.',
      leafminersDamage:
        'Ang mga matatandang leafminer ay naglalagay ng kanilang mga itlog sa mga dahon, at ang kanilang mga larba ay kumakain sa pagitan ng mga layer ng dahon, na nagiging sanhi ng mga paikut-ikot na lagusan, linya, at mga batik sa dahon.',
      leafrollerDamage:
        'Ang mga higad ng leafroller ay pinipilipit ang mga dahon sa isang bilog na hugis, na nagiging sanhi ng pagbagsak ng dahon at pinsala sa halaman.',
      loopersDamage:
        'Ang mga higad ng looper ay gumagawa ng mga butas sa mga dahon, na binabawasan ang kakayahan ng halaman na mag-photosynthesize at lumago.',
      maggotDamage:
        'Ang mga larba ng maggot ay kumakain sa mga ugat, tangkay, at bunga ng mga halaman, na nagiging sanhi ng pagkabulok, sekondaryang impeksiyon, at pagbaba ng sigla ng halaman.',
      mealybugsDamage:
        'Sinisipsip nila ang katas mula sa mga halaman, na nagiging sanhi ng pamumula at paghinto ng paglaki. Nag-iiwan din sila ng honeydew na umaakit ng itim na amag at langgam.',
      mexicanBeetleDamage:
        'Ang mga matatandang Mexican beetle at ang kanilang larba ay kumakain sa mga dahon ng bean. Ang mga matatanda ay gumagawa ng maliliit at bilog na mga butas, habang ang kanilang larba ay kumakain sa ilalim ng mga dahon, na nag-iiwan ng puntas o kalansay na hitsura.',
      pepperLaceBugDamage:
        'Ang mga matatandang pepper lace bug ay kumakain sa ilalim ng mga dahon, na nagiging sanhi ng maliliit na tuldok, pamumula, pagbagsak ng dahon, at pagbaba ng sigla ng halaman.',
      perseaMitesDamage:
        'Sila ay kumakain sa ilalim ng mga dahon ng avocado, na nagiging sanhi ng maliliit na tuldok, kulay tan, at pagbagsak ng mga dahon.',
      rhinocerosBeetleDamage:
        "Ang mga matatandang rhinoceros beetle ay bumabaon sa iba't ibang puno, na nagdudulot ng mabagal na paglaki at potensyal na pagkamatay ng puno. Ang kanilang mga larba ay madalas na matatagpuan sa loob ng puno.",
      rustFlyDamage:
        'Ang larba ng carrot rust fly ay kumakain sa mga ugat ng karot at iba pang halaman, na nagiging sanhi ng mga lagusan at sekondaryang impeksiyon.',
      scaleInsectsDamage:
        'Sinisipsip nila ang katas mula sa mga halaman, na nagiging sanhi ng pamumula, paghinto ng paglaki, pagkamatay ng mga sanga, at nag-iiwan ng honeydew na umaakit ng itim na amag.',
      skipperDamage:
        'Ang mga matatandang skipper at ang kanilang mga larba ay kumakain sa mga dahon, na nagiging sanhi ng hindi regular na mga butas, pagkapunit, at mabagal na paglaki ng halaman.',
      slugsAndSnailsDamage:
        'Ang mga slug at snail ay kumakain sa mga dahon, tangkay, at bunga, na nagiging sanhi ng hindi regular na mga butas at nag-iiwan ng madulas na nalalabi.',
      spiderMitesDamage:
        'Sinisipsip nila ang katas mula sa mga halaman, na nagiging sanhi ng maliliit na tuldok, kulay tan, at pagbagsak ng mga dahon.',
      spinachCrownMiteDamage:
        'Sila ay kumakain sa mga lumalaking bahagi ng spinach, na nagiging sanhi ng paghinto ng paglaki at mga baluktot na dahon.',
      squashBugDamage:
        'Ang mga matatandang squash bug at ang kanilang mga nymph ay sumisipsip ng katas mula sa mga halaman, na nagiging sanhi ng pagkalanta, pamumula, pagbagsak ng mga dahon, at kadalasang nagreresulta sa pagkamatay ng halaman.',
      squashVineBorerDamage:
        'Ang mga matatandang squash vine borer ay nangingitlog sa base ng mga halaman. Ang kanilang mga larba ay bumabaon sa mga tangkay, na nagiging sanhi ng panloob na pinsala, pagkalanta, pagbagsak, at mabagal na paglaki.',
      stinkbugsDamage:
        'Ang mga matatandang stink bug ay kumakain sa mga bunga at dahon, na nagiging sanhi ng mga mantsa at mga deformidad, habang ang kanilang mga larba ay kumakain din sa mga bahagi ng halaman, na nagdudulot ng mga tuldok-tuldok, pagbagsak ng dahon, at karagdagang stress sa halaman.',
      thripsDamage:
        'Sila ay kumakain sa mga bulaklak, dahon, at bunga, na nagiging sanhi ng maliliit na batik, pagkakaroon ng kulay pilak, at peklat, at nagkakalat din ng mga sakit.',
      treeBorerDamage:
        'Sila ay bumabaon sa mga katawan ng puno at sanga, na nagdudulot ng pinsala sa istruktura, pagbawas ng sigla, at posibleng pagkamatay ng puno kung malubha ang infestation.',
      weevilDamage:
        "Sila ay kumakain sa iba't ibang bahagi ng halaman, na nagiging sanhi ng pinsala sa mga ugat, tangkay, dahon, at buto, na nagpapabagal sa paglaki ng halaman.",
      whitefliesDamage:
        'Sinisipsip nila ang katas mula sa mga halaman, na nagiging sanhi ng paninilaw ng mga dahon, pagkalanta, paghinto ng paglaki, at pagbagsak ng mga dahon.',
      whiteGrubDamage:
        'Ang mga larba ng white grub ay kumakain sa mga ugat ng mga damo at halaman, na nagiging sanhi ng pagkalanta, pamumula, at pagkamatay ng halaman.',
      wirewormsDamage:
        'Ang mga larba ng wireworm ay kumakain sa mga buto, ugat, at tubers, na nagdudulot ng mabagal na paglaki at malaking pinsala, lalo na sa mga root crop.',

      // 100% Okay
      aphidsPC:
        'I-spray ang mga halaman ng malakas na daloy ng tubig upang alisin ang mga apido, o manu-manong alisin sila gamit ang iyong mga kamay, at gumamit ng reflective mulches upang maitaboy ang mga ito.',
      armywormPC:
        'Manu-manong alisin at patayin ang mga higad, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at araruhin ang lupa upang masira ang kanilang life cycle.',
      beanPodBorerPC:
        'Manu-manong alisin at patayin ang larba, alisin at itapon ang mga apektadong pod, o gumamit ng mga pheromone trap upang mahuli ang mga matatanda.',
      beetArmywormPC:
        'Manu-manong alisin at patayin ang mga higad, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at alisin ang mga nakapaligid na damo na maaaring magsilbing mga host.',
      chineseRoseBeetlePC:
        'Manu-manong alisin at patayin ang mga salagubang, gumamit ng mga bitag na may ilaw upang maakit at mahuli sila, at gumamit ng mga row cover upang takpan at protektahan ang mga halaman.',
      coloradoPotatoBeetlePC:
        'Manu-manong alisin at patayin ang mga salagubang at ang kanilang mga larba, at gumamit ng mga floating row cover para sa karagdagang proteksyon ng mga halaman.',
      cornEarwormPC:
        'Manu-manong alisin at patayin ang larba ng corn earworm, gumamit ng mga row cover para protektahan ang mga halaman, at mag-set up ng mga pheromone trap para mahuli ang mga gamugamo.',
      cucumberBeetlesPC:
        'Gumamit ng mga row cover para protektahan ang mga halaman, manu-manong alisin ang mga salagubang, at maglagay ng mga malagkit na bitag upang mahuli ang mga ito.',
      cutwormsPC:
        'Maglagay ng mga kwelyo sa paligid ng mga punla, alisin ang mga debris kung saan sila nagtatago, at araruhin ang lupa bago magtanim upang patayin ang mga higad.',
      diamondbackMothPC:
        'Manu-manong alisin at patayin ang larba, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at alisin ang mga natirang halaman pagkatapos ng pag-ani.',
      fleaBeetlesPC:
        'Gumamit ng mga floating row cover para protektahan ang mga punla, maglagay ng mga malagkit na bitag upang mahuli sila, at magtanim ng mga pananim na bitag upang protektahan ang pangunahing pananim.',
      grasshoppersPC:
        'Manu-manong alisin at patayin ang mga tipaklong, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at araruhin ang lupa upang patayin ang kanilang mga itlog.',
      hornwormsPC:
        'Manu-manong alisin at patayin ang mga higad, at gumamit ng mga row cover upang takpan at protektahan ang mga halaman.',
      japaneseBeetlePC:
        'Manu-manong alisin at patayin ang mga salagubang, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at kalugin ang mga halaman upang mahulog ang mga ito.',
      largeCabbageWhitePC:
        'Manu-manong alisin at patayin ang larba ng large cabbage white, gumamit ng mga floating row cover para protektahan ang mga halaman, at alisin ang mga nahawaang dahon.',
      leafhopperPC:
        'Gumamit ng mga dilaw na malagkit na bitag upang mahuli ang mga matatandang leafhopper o manu-manong alisin sila, at gumamit ng reflective mulches upang maitaboy ang mga ito.',
      leafminersPC:
        'Alisin ang mga nahawaang dahon, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at maglagay ng mga dilaw na malagkit na bitag upang mahuli ang mga matatandang leafminer.',
      leafrollerPC:
        'Manu-manong alisin ang mga nakatuping hugis bilog na dahon at higad, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at putulin ang mga nahawaang bahagi ng halaman.',
      loopersPC:
        'Manu-manong alisin at patayin ang mga higad, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at alisin ang mga nakapaligid na damo na maaaring magsilbing mga host.',
      maggotPC:
        'Gumamit ng mga floating row cover para protektahan ang mga halaman, at maglagay ng mga beneficial nematode sa lupa.',
      mealybugsPC:
        'I-spray ang mga halaman ng malakas na agos ng tubig upang alisin ang mealybugs, at alisin ang mga nahawaang bahagi ng halaman.',
      mexicanBeetlePC:
        'Manu-manong alisin ang mga salagubang at ang kanilang mga larba, at gumamit ng mga row cover upang takpan at protektahan ang mga halaman.',
      pepperLaceBugPC:
        'Gumamit ng mga row cover upang takpan at protektahan ang mga halaman, manu-manong alisin at patayin sila, at alisin ang mga debris kung saan sila nagtatago.',
      perseaMitesPC:
        'Putulin ang mga nahawaang dahon, gumamit ng horticultural oils upang patayin ang mga mite, at lagyan ng predatory mites ang iyong mga halaman.',
      rhinocerosBeetlePC:
        'Manu-manong alisin at patayin ang mga salagubang, alisin ang mga nahawaang bahagi ng halaman, at gumamit ng mga bitag na may ilaw upang mahuli ang mga matatandang rhinoceros beetle.',
      rustFlyPC:
        'Gumamit ng mga floating row cover para protektahan ang mga halaman at alisin ang mga nahawaang bahagi ng halaman.',
      scaleInsectsPC:
        'Putulin ang mga nahawaang sanga, gumamit ng horticultural oils upang patayin ang mga scale, at kuskusin ang mga scale gamit ang isang brush upang alisin ang mga ito sa iyong mga halaman.',
      skipperPC:
        'Manu-manong alisin at patayin ang larba ng skipper, at gumamit ng mga row cover upang takpan at protektahan ang mga halaman.',
      slugsAndSnailsPC:
        'Manu-manong alisin at patayin ang mga slug at snail, gumamit ng mga tansong harang, at mag-set up ng mga pain gaya ng alak o yeast mixture para mahuli ang mga ito.',
      spiderMitesPC:
        'I-spray ang mga halaman ng malakas na daloy ng tubig upang alisin ang mga mite, gumamit ng horticultural oils o insecticidal soaps, at alisin ang mga nahawaang dahon.',
      spinachCrownMitePC:
        'Alisin ang mga nahawaang bahagi ng halaman at sanayin ang inirerekomendang pamamaraan, crop rotation, upang masira ang life cycle ng spinach crown mites.',
      squashBugPC:
        'Manu-manong alisin at patayin ang mga itlog ng squash bug, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at alisin ang mga debris kung saan sila nagtatago.',
      squashVineBorerPC:
        'Alisin ang mga nahawaang baging, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at ipasok ang alambre o stick sa mga tangkay upang patayin ang larba ng squash vine borer.',
      stinkbugsPC:
        'Manu-manong alisin at patayin ang mga matatandang stink bug, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at alisin ang mga damo at debris kung saan sila nagtatago.',
      thripsPC:
        'Gumamit ng mga asul na malagkit na bitag upang mahuli ang mga matatandang thrip, putulin ang mga nahawaang bahagi ng halaman, at gumamit ng reflective mulches upang maitaboy ang mga ito.',
      treeBorerPC:
        'Alisin ang mga nahawaang sanga, gumamit ng proteksiyon na pambalot sa paligid ng mga puno, at maglagay ng mga beneficial nematode sa lupa.',
      weevilPC:
        'Manu-manong alisin at patayin ang mga matatandang weevil, gumamit ng mga row cover upang takpan at protektahan ang mga halaman, at sanayin ang inirerekomendang pamamaraan, crop rotation, upang maiwasan ang pagdami ng mga ito.',
      whitefliesPC:
        'Gumamit ng mga dilaw na malagkit na bitag upang mahuli ang mga matatandang whitefly, i-spray ang mga halaman ng malakas na daloy ng tubig upang alisin sila, at alisin ang mga nahawaang dahon.',
      whiteGrubPC:
        'Maglagay ng mga beneficial nematode sa lupa, gumamit ng mga floating row cover para protektahan ang mga halaman, at sanayin ang inirerekomendang pamamaraan, crop rotation, upang mabawasan ang infestation.',
      wirewormsPC:
        'Araruhin ang lupa upang patayin ang larba, gumamit ng mga pain upang maiwasan ang pagdami nito, at sanayin ang inirerekomendang pamamaraan, crop rotation.',

      // 100% Okay
      alternariaLeafSpotIdentification:
        'Ang alternaria leaf spot ay isang fungal na sakit na nagpapakita bilang maliit, maitim na kayumanggi hanggang itim na mga batik na may dilaw na halos sa mga dahon.',
      angularLeafSpotIdentification:
        'Ang angular leaf spot ay isang bacterial na sakit na nailalarawan sa pamamagitan ng mga sugat sa mga dahon na nagsisimula bilang mga water-soaked na batik, kalaunan ay nagiging kulay abo o kulay tan, at kalaunan ay nagiging patay na tisyu.',
      anthracnoseIdentification:
        'Ang anthracnose ay isang fungal na sakit na kilala sa pagdudulot ng maliliit, maitim na nakalubog na mga sugat sa mga dahon na may dilaw na halos, tangkay, bulaklak, at bunga.',
      bacterialCankerIdentification:
        'Ang bacterial canker ay nakikilala sa pamamagitan ng mga sugat na may dagta sa mga tangkay at water-soaked na mga sugat sa mga dahon.',
      bacterialLeafSpotIdentification:
        'Ang bacterial leaf spot ay kilala sa maliliit, water-soaked na mga batik sa mga dahon na kalaunan ay nagiging kayumanggi at patay na tisyu at kadalasang napapalibutan ng dilaw na halo.',
      bacterialRingRotIdentification:
        'Ang bacterial ring rot ay nagreresulta sa pagkalanta at paninilaw ng mga dahon, na may katangiang kayumangging bulok sa mga tuber na nagpapakita ng mga vascular ring.',
      bacterialSpotIdentification:
        'Ang bacterial spot ay nagreresulta sa maliliit, maitim, water-soaked na mga batik sa mga dahon, tangkay, at bunga, na lumalaki at nagiging patay na tisyu.',
      blackRotIdentification:
        'Ang black rot ay isang fungal na sakit na nailalarawan sa pamamagitan ng maitim, lumubog na mga sugat sa mga dahon, tangkay, at bunga.',
      blackSigatokaIdentification:
        'Ang black sigatoka ay nagdudulot ng mga maitim na guhit at batik sa mga dahon, na nagreresulta sa malalaking patay na mga bahagi ng tisyu at potensyal na pagkamatay ng mga dahon.',
      blackSpotIdentification:
        'Ang black spot ay isang fungal na sakit na bumubuo ng mga bilog, itim na batik na may fringed margin sa mga dahon, na nagiging sanhi ng paninilaw at pagbagsak ng dahon.',
      blossomEndRotIdentification:
        'Ang blossom-end rot ay isang pisyolohikal na disorder na nailalarawan sa pamamagitan ng maitim, nakalubog na mga batik sa dulong bahagi ng bunga, kadalasan dahil sa kakulangan ng calcium.',
      buckeyeRotIdentification:
        'Ang buckeye rot ay isang fungal na sakit na nagiging sanhi ng water-soaked na kayumanggi hanggang itim na mga batik na may concentric ring sa bunga.',
      cercosporaLeafBlightIdentification:
        'Ang cercospora leaf blight, sanhi ng fungi, ay lumilitaw bilang kayumanggi hanggang kulay abo na mga batik na may mapupulang mga hangganan sa mga dahon, na nagreresulta sa defoliation.',
      cercosporaLeafSpotIdentification:
        'Ang cercospora leaf spot ay nagpapakita bilang pabilog hanggang sa hindi regular na mga batik na may mga light center at maitim na mga hangganan sa mga dahon.',
      cigarEndRotIdentification:
        'Ang cigar end rot ay isang fungal na sakit na nakikilala sa maitim at nakalubog na mga sugat sa dulo ng bunga.',
      clubrootIdentification:
        'Ang clubroot ay isang fungal na sakit na nagdudulot ng namamaga, club-like na mga ugat, na nagreresulta sa paghinto ng paglaki at pagkalanta.',
      cottonyRotIdentification:
        'Ang cottony rot ay isang fungal na sakit na nailalarawan sa pamamagitan ng puti, cottony na paglaki ng fungal sa mga nahawaang bahagi ng halaman, na nagreresulta sa malambot, watery rot at paninilaw ng mga dahon.',
      dampingOffIdentification:
        'Ang damping-off ay isang fungal na sakit na nagiging sanhi ng pagbagsak at pagkamatay ng mga punla dahil sa pagkabulok sa base ng tangkay.',
      downyMildewIdentification:
        'Ang downy mildew ay isang fungal na sakit na nagpapakita bilang dilaw o maputlang berdeng mga batik sa mga dahon, na kadalasang sinasamahan ng downy growth sa ilalim.',
      earlyBlightIdentification:
        'Ang early blight ay isang fungal na sakit na bumubuo ng maitim, concentric ring lesion sa mga dahon, tangkay, at bunga, na karaniwang nagsisimula sa mas matatandang dahon.',
      fusariumWiltIdentification:
        'Ang fusarium wilt ay nakikilala sa pamamagitan ng paninilaw at pagkalanta ng mga dahon, na may kayumangging discoloration sa vascular tisyu ng halaman.',
      grayLeafBlightIdentification:
        'Ang gray leaf blight, sanhi ng fungi, ay nagpapakita ng kulay abong mga sugat sa mga dahon, kadalasang nagsisimula sa mga dulo at gilid.',
      grayMoldIdentification:
        'Ang gray mold ay isang fungal na sakit na nailalarawan ng kulay abo, fuzzy mold growth sa mga bulaklak, bunga, at mga dahon, na nagreresulta sa pagkabulok ng tisyu.',
      gummyStemBlightIdentification:
        'Ang gummy stem blight ay isang fungal na sakit na nagdudulot ng maitim na sugat na may gummy exudate sa mga tangkay at dahon.',
      lateBlightIdentification:
        'Ang late blight ay isang fungal na sakit na nagdudulot ng water-soaked na mga sugat sa mga dahon, tangkay, at bunga, na mabilis na nagiging kayumanggi o itim.',
      mosaicVirusIdentification:
        'Ang mosaic virus ay nagdudulot ng batik-batik o parang mosaic na pattern sa mga dahon, na may hindi regular na dilaw, puti, at berdeng mga patch o pagkawalan ng kulay.',
      phytophthoraBlightIdentification:
        'Ang phytophthora blight ay isang fungal na sakit na humahantong sa water-soaked na mga sugat sa mga dahon, tangkay, at bunga, na kadalasang nagiging sanhi ng pagbagsak at pagkabulok ng halaman.',
      phytophthoraFruitRotIdentification:
        'Ang phytophthora fruit rot ay kilala sa watery, kayumangging bulok sa bunga, kadalasang sinasamahan ng white fungal growth.',
      powderyMildewIdentification:
        'Ang powdery mildew ay isang fungal na sakit na nagpapakita bilang puti, powdery growth sa mga dahon, tangkay, at bulaklak, na nagiging sanhi ng paninilaw at pagkulot.',
      pythiumFruitRotIdentification:
        'Ang pythium fruit rot, sanhi ng fungi, ay karaniwang nagsisimula bilang maliliit, water-soaked na sugat sa hindi pa hinog o hinog na bunga na malapit o nakadikit sa lupa.',
      rootKnotNematodeIdentification:
        'Ang root knot nematode ay isang sakit na nematode na bumubuo ng mga gall o knot sa mga ugat, na humahantong sa paghinto ng paglaki at paninilaw.',
      rootRotIdentification:
        'Ang root rot ay isang fungal na sakit na nailalarawan sa pamamagitan ng kayumanggi, malambot na mga ugat na nagdudulot ng paninilaw, pagkalanta, at paghinto ng paglaki.',
      rustIdentification:
        'Ang rust ay isang fungal na sakit na nagdudulot ng dilaw, kahel, pula, o kayumangging mga pustule sa mga dahon at tangkay, na humahantong sa defoliation.',
      sootyMoldIdentification:
        'Ang sooty mold, isang fungal na sakit, ay nagpapakita bilang itim, soot-like growth sa mga dahon at tangkay, na kadalasang nauugnay sa honeydew mula sa mga insekto na sumisipsip ng dagta.',
      sunblotchIdentification:
        'Ang sunblotch ay isang viral na sakit na nagdudulot ng chlorotic streaks o blotches sa mga dahon at bunga, na humahantong sa distorted growth.',
      tomatoSpottedWiltIdentification:
        'Ang tomato spotted wilt ay isang viral na sakit na nailalarawan sa pamamagitan ng ringspots, mottling, at necrosis sa mga dahon at bunga.',
      verticilliumWiltIdentification:
        'Ang verticillium wilt ay isang fungal na sakit na nagdudulot ng paninilaw at pagkalanta ng mga dahon, kadalasang isang panig, na may kayumangging mga guhit sa vascular tisyu.',
      whiteMoldIdentification:
        'Ang white mold ay isang fungal na sakit na nagpapakita bilang puti, cottony fungal growth sa mga tangkay, dahon, at pods, na humahantong sa pagkabulok ng tisyu.',

      // 100% Okay
      alternariaLeafSpotPC:
        'Alisin ang mga nahawaang dahon at mga debris ng halaman, at ayusin ang sirkulasyon ng hangin sa pamamagitan ng tamang pagitan ng mga halaman upang mabawasan ang kahalumigmigan.',
      angularLeafSpotPC:
        'Alisin ang mga nahawaang bahagi ng halaman, iwasan ang pagdidilig mula sa itaas upang mabawasan ang pagkabasa ng dahon, at sanayin ang crop rotation.',
      anthracnosePC:
        'Alisin at itapon ang mga nahawaang bahagi ng halaman, iwasan ang pagdidilig mula sa itaas, at gumamit ng plant-resistant varieties, kung mayroon.',
      bacterialCankerPC:
        'Alisin ang mga nahawaang sanga at bunga, iwasan ang pagdidilig mula sa itaas, at gumamit ng mga isterilisadong kasangkapan at kagamitan.',
      bacterialLeafSpotPC:
        'Alisin ang mga nahawaang dahon at tangkay, tiyakin ang tamang pagitan ng halaman para sa daloy ng hangin, at iwasan ang direktang pagdidilig ng mga dahon.',
      bacterialRingRotPC:
        'Alisin ang mga nahawaang halaman at tubers, sanayin ang crop rotation, at gumamit ng disease-free planting material.',
      bacterialSpotPC:
        'Alisin ang maitim, water-soaked na mga batik sa mga dahon, tangkay, at bunga at ayusin ang sirkulasyon ng hangin sa paligid ng mga halaman.',
      blackRotPC:
        'Alisin ang mga nahawaang bahagi ng halaman, sanayin ang crop rotation, at tiyakin ang wastong pagitan upang mapabuti ang daloy ng hangin at bawasan ang halumigmig.',
      blackSigatokaPC:
        'Alisin ang mga nahawaang dahon, gumamit ng resistant cultivars, at tiyakin ang tamang pagitan at sirkulasyon ng hangin.',
      blackSpotPC:
        'Alisin ang mga nahawaang dahon at debris, iwasan ang pagdidilig mula sa itaas, at gumamit ng resistant varieties kung mayroon.',
      blossomEndRotPC:
        'Tiyakin ang patuloy na pagdidilig upang maiwasan ang moisture stress, at lagyan ng calcium supplements ang lupa kung kinakailangan.',
      buckeyeRotPC:
        'Alisin at itapon ang mga nahawaang bunga, ayusin ang sirkulasyon ng hangin sa paligid ng mga halaman, at iwasan ang pagdidilig mula sa itaas.',
      cercosporaLeafBlightPC:
        'Alisin ang mga nahawaang bahagi ng halaman, ayusin ang sirkulasyon ng hangin, at iwasan ang pagdidilig mula sa itaas.',
      cercosporaLeafSpotPC:
        'Alisin ang mga nahawaang dahon, tiyakin ang tamang pagitan ng halaman, at iwasan ang pagdidilig mula sa itaas.',
      cigarEndRotPC:
        'Alisin at itapon ang mga nahawaang bunga, iwasan ang pagdidilig mula sa itaas, at tiyakin ang tamang pagitan ng halaman at sirkulasyon ng hangin.',
      clubrootPC:
        'Gumamit ng resistant plant varieties, sanayin ang crop rotation, at ayusin ang drainage ng lupa upang maiwasan ang pagtigas ng lupa.',
      cottonyRotPC:
        'Alisin ang mga nahawaang bahagi ng halaman, ayusin ang sirkulasyon ng hangin, at iwasan ang sobrang kahalumigmigan habang pinapanatili ang tamang drainage.',
      dampingOffPC:
        'Iwasan ang sobrang pagdidilig, gumamit ng lupa na may magandang drainage, at tiyakin ang tamang pagitan ng mga punla.',
      downyMildewPC:
        'Alisin ang mga nahawaang bahagi ng halaman, tiyaking maayos ang sirkulasyon ng hangin, at iwasan ang pagdidilig sa itaas.',
      earlyBlightPC:
        'Alisin ang mga nahawaang dahon, ayusin ang sirkulasyon ng hangin, iwasan ang pagdidilig mula sa itaas, at gumamit ng resistant varieties.',
      fusariumWiltPC:
        'Gumamit ng resistant plant varieties, sanayin ang crop rotation, at iwasan ang pagtatanim sa nahawaang lupa.',
      grayLeafBlightPC:
        'Alisin ang mga nahawaang dahon, ayusin ang sirkulasyon ng hangin, at avoid working with wet plants.',
      grayMoldPC:
        'Alisin ang mga nahawaang bahagi ng halaman, tiyaking maayos ang sirkulasyon ng hangin, at iwasan ang sobrang kahalumigmigan.',
      gummyStemBlightPC:
        'Alisin ang mga nahawaang tangkay at dahon, ayusin ang sirkulasyon ng hangin, at iwasan ang pagdidilig mula sa itaas.',
      lateBlightPC:
        'Alisin ang mga nahawaang bahagi ng halaman, iwasan ang pagdidilig mula sa itaas, at gumamit ng resistant varieties kung mayroon.',
      mosaicVirusPC:
        'Alisin ang mga nahawaang halaman, gumamit ng mga buto na walang virus at resistant varieties, at kontrolin ang mga apido at iba pang mga vector ng insekto.',
      phytophthoraBlightPC:
        'Alisin ang mga nahawaang bahagi ng halaman, ayusin ang drainage ng lupa, at iwasan ang pagdidilig mula sa itaas.',
      phytophthoraFruitRotPC:
        'Alisin at itapon ang mga nahawaang bunga, tiyaking maayos ang drainage, at iwasan ang pagdidilig mula sa itaas.',
      powderyMildewPC:
        'Alisin ang mga nahawaang bahagi ng halaman, tiyakin ang tamang pagitan ng halaman, at gumamit ng resistant varieties.',
      pythiumFruitRotPC:
        'Alisin ang mga nahawaang bunga, ayusin ang drainage ng lupa, at iwasan ang sobrang kahalumigmigan.',
      rootKnotNematodePC:
        'Sanayin ang crop rotation, gumamit ng nematode-resistant plant varieties, at gawing solarize ang lupa kung maaari.',
      rootRotPC:
        'Ayusin ang drainage ng lupa, iwasan ang sobrang pagdidilig, at alisin at itapon ang mga nahawaang halaman.',
      rustPC:
        'Alisin ang mga nahawaang bahagi ng halaman, tiyaking maayos ang sirkulasyon ng hangin, at iwasan ang pagdidilig mula sa itaas.',
      sootyMoldPC:
        'Alisin at kontrolin ang pinagmumulan ng honeydew, tulad ng mga insektong sumisipsip ng dagta, at alisin ang mga nahawaang bahagi ng halaman.',
      sunblotchPC:
        'Alisin ang mga nahawaang halaman at gumamit ng materyal sa pagtatanim na walang virus.',
      tomatoSpottedWiltPC:
        'Alisin ang mga nahawaang halaman, kontrolin ang mga thrips (na mga tagadala ng virus), at gumamit ng resistant varieties.',
      verticilliumWiltPC:
        'Gumamit ng resistant varieties, sanayin ang crop rotation, at iwasan ang pagtatanim sa nahawaang lupa.',
      whiteMoldPC:
        'Alisin ang mga nahawaang bahagi ng halaman, tiyaking maayos ang sirkulasyon ng hangin, at iwasan ang sobrang kahalumigmigan.',

      // 100% Okay
      assassinBugsIdentification:
        'Ang mga assassin bug ay iba-iba ang laki at kulay. Sila ay mga mandaragit na insekto na kilala sa kanilang mga pahabang katawan, malalakas na binti, at hubog, parang karayom na bibig na ginagamit para mag-inject ng lason sa kanilang biktima.',
      batsIdentification:
        'Ang mga paniki ay mga nocturnal mammal na may mga pakpak, matatalas na ngipin, malalaking tainga, at keen sense of echolocation, na ginagamit nila upang mag-navigate at manghuli ng mga insekto sa dilim.',
      beesIdentification:
        'Ang mga bubuyog ay mga insektong lumilipad na may mabalahibong katawan, karaniwang dilaw at itim, at kilala sa kanilang papel sa polinasyon. Mayroon silang espesyal na bahagi ng bibig para sa pagkolekta ng nektar.',
      birdsIdentification:
        'Malaki ang pagkakaiba-iba ng mga ibon sa laki, kulay, at tirahan, at sila ay nailalarawan sa pamamagitan ng mga balahibo, pakpak, tuka, at kakayahang mangitlog.',
      butterfliesIdentification:
        'Ang mga paru-paro ay mga insektong lumilipad sa araw na may malalaking, madalas na may pattern na mga pakpak at payat na katawan. Nagsisimula sila bilang mga higad bago mag-transform bilang paru-paro, na kilala sa kanilang kagandahan.',
      earthwormsIdentification:
        'Ang mga bulate ay pahaba, walang paa, malambot ang katawan, kadalasang kayumanggi o mapula-pula ang kulay.',
      fliesIdentification:
        'Iba-iba ang laki ng mga robber fly, at sila ay matipuno, insektong mabilis lumilipad na may mahahabang binti at bristly na mukha.',
      groundBeetlesIdentification:
        'Ang mga ground beetle ay mga insektong mabilis gumagalaw na may makintab, kadalasang itim o kulay metal na mga katawan.',
      lacewingsIdentification:
        'Ang mga matatandang lacewing ay maliliit na insekto na may malalaking, transparent na pakpak na parang puntas at mahabang antena, kadalasang berde o kayumanggi ang kulay.',
      ladybugsIdentification:
        'Ang mga matandang ladybug ay maliit, hugis bilog, karaniwang pula, dilaw, o kahel ang kulay, na may batik-batik na mga takip ng pakpak.',
      spidersIdentification:
        "Ang mga gagamba ay mga arachnid na may walong paa na may iba't ibang hugis at sukat at kilala sa pagpapaikot ng sapot upang mahuli ang biktima.",
      waspsIdentification:
        "Ang mga braconid wasp ay maliliit, payat na mga wasp na may mahabang antena at iba't ibang kulay at pattern.",

      // 100% Okay
      assassinBugsBenefits:
        "Nanghuhuli sila ng iba't ibang peste na insekto, tulad ng mga higad, apido, at salagubang.",
      batsBenefits:
        'Sila ay mahalaga para sa pagkontrol sa populasyon ng insekto, partikular na ang mga lamok at iba pang mga peste na lumilipad sa gabi.',
      beesBenefits:
        "Sila ay mahahalagang pollinator, na gumaganap ng isang kritikal na papel sa pagpaparami ng iba't ibang namumulaklak na halaman at pananim.",
      birdsBenefits:
        'Nakakatulong sila sa pagkontrol ng peste sa pamamagitan ng pagkain sa mga insekto at iba pang maliliit na peste.',
      butterfliesBenefits:
        'Tumutulong sila sa pag-pollinate ng mga bulaklak, pagsuporta sa produksyon ng bunga at buto; ang kanilang presensya ay nagpapaganda ng biodiversity at nag-aambag sa isang malusog na ecosystem; at ang kanilang mga larba ay maaaring tumulong sa pamamahala ng mga peste sa hardin.',
      earthwormsBenefits:
        'Pinapainit nila ang lupa at pinapahusay ang istraktura nito, na ginagawa itong mas nakakatulong sa paglaki ng halaman. Nabubulok din nila ang mga organikong bagay, na nagpapayaman sa lupa ng mga sustansyang mahalaga para sa malusog na pag-unlad ng halaman.',
      fliesBenefits:
        "Tumutulong sila sa pagkontrol sa mga populasyon ng peste sa pamamagitan ng paghuli sa iba't ibang insekto, pagbabawas ng pangangailangan para sa mga chemical control, at pagpapanatili ng balanse sa ekolohiya.",
      groundBeetlesBenefits:
        "Sila ay likas na predators ng iba't ibang mga peste sa hardin, kabilang ang mga slug, higad, at apido.",
      lacewingsBenefits:
        'Sila ay lubos na kapaki-pakinabang, dahil parehong larba at matatandang lacewings ay bumibiktima ng mga peste na malalambot ang katawan tulad ng mga apido, mite, at maliliit na higad.',
      ladybugsBenefits:
        'Sila ay matakaw na predators ng mga apido, scale insect, at iba pang malalambot na peste.',
      spidersBenefits:
        "Sila ay kapaki-pakinabang na mga mandaragit, na kumakain ng iba't ibang mga insekto at iba pang mga arthropod.",
      waspsBenefits:
        'Natural nilang kinokontrol ang mga populasyon ng peste sa pamamagitan ng pag-parasitize ng mga nakakapinsalang insekto tulad ng apido at higad, na tumutulong sa pagprotekta sa mga pananim at pagsuporta sa balanse ng ekolohiya.',

      // 100% Okay
      affectedCrops: 'Mga apektadong pananim',
      noAffectedCropsFound: 'Walang nakitang apektadong pananim',
      identification: 'Pagkakakilanlan',
      damage: 'Pinsala',
      physicalControl: 'Pisikal na kontrol',
      benefits: 'Benepisyo',

      // Others
      searchCrop: 'Maghanap ng pananim...',
      category: 'Kategorya',
    },
  },
};

// Function that will retrieve the selected language
const getSelectedLanguage = async () => {
  try {
    const selectedLanguage = await AsyncStorage.getItem('appLanguage');
    return selectedLanguage || fallbackLng;
  } catch (error) {
    console.error('Error retrieving language preference:', error);
    return fallbackLng;
  }
};

// Set the language on app startup
getSelectedLanguage().then((savedLanguage) => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng,
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18n;
