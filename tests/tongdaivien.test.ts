
import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('Tổng đài viên', async ({ page }) => {
  // Sử dụng hàm login từ utils
  await login(page,'00000002424','Abc@4321')

//   await expect(page.locator('text=Trang chủ')).toBeVisible();
    const menuItem = page.locator('text=Màn hình làm việc');
    await menuItem.click();
    await page.waitForTimeout(1000);

    const menuItem1 = page.locator('text=Tổng đài viên');
    await menuItem1.first().click();
// Click vào ng-select
await page.locator("//ng-select[@placeholder='Chọn dự án']//div[@class='ng-select-container ng-has-value']").click();

// Chờ danh sách thả xuống hiển thị và chọn "Dự Án Test 3T"
await page.locator("//span[@class='ng-option-label ng-star-inserted'][contains(text(),'Công ty Cổ phần Công nghệ thông tin 3T')]").click();
await page.waitForTimeout(1000);

await page.locator("//ng-select[@placeholder='Chọn chiến dịch']//span[@class='ng-arrow-wrapper']").click();

await page.waitForTimeout(1000);
const chiendich= await page.locator("//span[contains(text(),'3T_Tuyển dụng lao động có chuyên môn')]");
// Chờ phần tử có thể nhìn thấy
await chiendich.waitFor({ state: 'visible' });

// Sau đó click vào phần tử
await chiendich.click();
console.log(chiendich);

});
