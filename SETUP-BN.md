# AGI-SBC Phase 2A — Android ফোন থেকে সেটআপ (বাংলা)

## ZIP আপলোড
1. Chrome-এ `https://github.com/AGISBCAI/AGI-SBC` খুলে সঠিক GitHub অ্যাকাউন্টে লগইন করুন।
2. Code পেজে `Add file` → `Upload files` নির্বাচন করুন।
3. ZIP আগে ফোনে Extract করুন। Extract করা ফোল্ডারের ভেতরের ফাইল ও ফোল্ডারগুলো repository root-এ আপলোড করুন; parent folder নিজে আপলোড করবেন না।
4. `README.md` আপলোড করবেন না এবং GitHub-এ থাকা `README.md` পরিবর্তন করবেন না।
5. Commit করার আগে পরিবর্তনের তালিকা দেখে নিন। অজানা বা অতিরিক্ত ফাইল থাকলে থামুন।

## Dependency Resolver চালানো
1. Repository → Actions খুলুন।
2. বাম পাশ থেকে `Resolve Expo SDK 58 dependencies` workflow বেছে নিন।
3. `Run workflow` চাপুন এবং `main` branch নির্বাচন করুন।
4. Run শুরু করুন। এটি কেবল নতুন `deps-lock` branch তৈরি করার চেষ্টা করবে; `main`-এ push করবে না।
5. Run সফল হলে Branches পেজে `deps-lock` দেখুন। তারপর Pull requests → New pull request দিয়ে `deps-lock` থেকে `main`-এ PR খুলুন।
6. `package.json` ও `package-lock.json` পরিবর্তন পরীক্ষা করে নিজে Merge করুন। অজানা পরিবর্তন থাকলে merge করবেন না।

## APK তৈরি
1. Actions → `Android Debug APK` → `Run workflow`।
2. Run সফল হলে Actions run-এর নিচে Artifacts থেকে `agi-sbc-android-debug-apk` ডাউনলোড করুন।
3. ZIP খুলে APK ইনস্টল করুন। Android অজানা উৎস থেকে ইনস্টল করার অনুমতি চাইতে পারে।
4. এটি Debug APK; Play Store Release APK নয়।

## Web build
Actions → `Web Static Build` → `Run workflow`। সফল হলে `agi-sbc-web-static` artifact ডাউনলোড করুন। এই workflow deploy করে না।

## নিরাপত্তা
- `Read repository contents and packages` default permission অপরিবর্তিত রাখুন।
- Repository Settings-এ global `Read and write` চালু করবেন না।
- Resolver workflow-তেই শুধু `contents: write` আছে।
- কোনো Password, Token, API key, keystore বা ব্যক্তিগত তথ্য commit করবেন না।
- কোনো ধাপে payment, billing বা card চাইলে থামুন।
