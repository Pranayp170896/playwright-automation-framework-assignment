import { test, expect } from "@playwright/test";
import fs from "fs";

const TOKEN = "XiGH0QJykuMI0X7f3LrJ3jTx0YEBcUHY";

test("2.1. File download and reading file content and write it in file", async ({ request }) => {

  const fileId = "bjnf230l4izu7i8k7tw2xzzmmop8dbjl";
  const downloadResp = await request.get(`/d/${fileId}`);

  const fileBuffer = await downloadResp.body();

  if (!fs.existsSync("output")) {
    fs.mkdirSync("output");
  }

  const downloadedPath = "output/downloadedFile.txt";
  fs.writeFileSync(downloadedPath,fileBuffer);
  console.log("File downloaded successfully");

  const content = fs.readFileSync(downloadedPath, "utf8");
  console.log("Downloaded File Content:", content);

  const updatedContent = {
    originalContent: content,
    Category: "this is related to api testing"
  }; 

  fs.writeFileSync("output/final-result.txt", JSON.stringify(updatedContent, null, 2));
  console.log("Final file created with extra fields");
});

test("2.2. File upload - use above created file for uploading", async ({ request }) => {

  const filePath = "output/final-result.txt";
  const fileBuffer = fs.readFileSync(filePath);

  const uploadResp = await request.post('/upload', {
    multipart: {
      file: {
        name: "pranay-final-result.txt",
        mimeType: "text/plain",
        buffer: fileBuffer
      }
    }
  });

  const uploadJson = await uploadResp.json();
  console.log("File uploaded successfully");
  console.log(uploadJson);
});

test("2.3. Use auth token for to connect endpoint", async ({ request }) => {

  const response = await request.get('/user', {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN}`
    }
  });

  await expect(response.ok()).toBeTruthy();
  const status = await response.status();
  console.log('Status:', status);

  const result = await response.json();
  console.log(result);
  
  expect(result.Active).toBe(true);
  expect(result.Email).toBe("partekepranay@gmail.com");
});

