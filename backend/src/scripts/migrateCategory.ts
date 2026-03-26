// import "dotenv/config"; // ✅ always FIRST
// import { prisma } from "../config/prisma";

// console.log("DB URL:", process.env.DATABASE_URL);

// async function main() {
//   console.log("🚀 Starting migration...");

//   // 1. Create categories (idempotent)
//   const categories = ["WORK", "PERSONAL", "IDEAS"];

//   for (const name of categories) {
//     await prisma.category.upsert({
//       where: { name },
//       update: {},
//       create: { name },
//     });
//   }

//   console.log("✅ Categories inserted");

//   // 2. Fetch all categories
//   const allCategories = await prisma.category.findMany();

//   const map: Record<string, string> = {};
//   allCategories.forEach(c => {
//     map[c.name] = c.id;
//   });

//   // 3. Only fetch notes where categoryId is null (optimization)
//   const notes = await prisma.note.findMany({
//     where: {
//       categoryId: null,
//     },
//   });

//   console.log(`📝 Found ${notes.length} notes to update`);

//   // 4. Map enum → categoryId
//   for (const note of notes) {
//     const categoryId = map[note.categoryenum];

//     if (!categoryId) {
//       console.warn(`⚠️ Skipping note ${note.id} (no mapping found)`);
//       continue;
//     }

//     await prisma.note.update({
//       where: { id: note.id },
//       data: {
//         categoryId,
//       },
//     });
//   }

//   console.log("🎉 Migration complete");
// }

// main()
//   .catch((err) => {
//     console.error("❌ Migration failed:", err);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
