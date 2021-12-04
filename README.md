# เครื่องมือ

- Storybook (UI documentation)
- React testing library
- Chromatic (Visual testing service)

# การติดตั้ง

```bash
git clone https://github.com/React-in-Thai/learn-react-testing.git
cd learn-react-testing
yarn
```

# แบบฝึกหัด

1. สร้าง Avatar component ที่มี properties ดังนี้
  - `src`: รูปที่ใช้แสดง (หากไม่ใส่ `src` มาให้แสดงเป็น ตัวอักษร)
  - `children`: ตัวอักษร หรือ ไอคอน ที่แสดง หากไม่มี `src`
  - `size`: `sm` | `lg` ขนาดของ Avatar
  - แสดงผลถูกต้องตามหลัก accessibility
    - role
    - aria-label

2. เขียนเทสที่ครอบคลุม (เช็คได้จาก code coverage)
3. แสดงผลลงใน storybook
4. เปิดใช้งาน chromatic
5. ทดลองเปิด PR (pull request) และ setup github check ในการรัน unit test และ visual test (chromatic)
   - หากเทสไม่ผ่าน ไม่สามารถ merge ได้