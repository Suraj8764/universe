# Photo Gallery Guide for Ritu & Smurti 📸

You can easily replace the pastel artwork placeholders with real photos of Ritu and Smurti!

### How to add your real photos:
1. Place your `.jpg` or `.png` files directly inside this folder (`public/images/`):
   - For example: `photo-1.jpg`, `roadtrip.png`, etc.
2. Open `data/friendship.ts`.
3. In the `polaroidMemories` array, add the `imagePath` property to the desired memory item:
   ```ts
   {
     id: "polaroid-1",
     title: "Golden Hour Giggles",
     date: "October Sunset",
     location: "Our Favorite Hillside",
     caption: "When the sky was painted gold and our smiles were infinite.",
     longStory: "...",
     aspectRatio: "portrait",
     rotationDeg: -3,
     category: "candid",
     svgIllustrationType: "sunset",
     imagePath: "/images/photo-1.jpg", // <-- Add your file path here!
   }
   ```
4. Save the file and reload the website. The Polaroid will now display your real photo!
