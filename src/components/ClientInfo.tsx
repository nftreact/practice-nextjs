import { Flex, Input, Typography, Colors } from "primitives";
import React from "react";
import styled from "styled-components";

const ClientInfo = () => {
  const array: number[] = [1, 2, 3];
  return (
    <Root>
      <Box>
        <Typography>مشخصات مشتری</Typography>
        <Container>
          <Flex>
            <Typography>شماره تلفن همراه</Typography>
            <Typography>09121361559</Typography>
          </Flex>
          <Flex gap={1.6}>
            <Input labelVariant="body" width="48%" label="نام" placeholder="علی" />
            <Input labelVariant="body" width="48%" label="نام و نام خانوادگی" placeholder="حسنی" />
          </Flex>
        </Container>
      </Box>
      <Box>
        <Typography>آدرس پستی </Typography>
        <Container>
          <Flex justifyContent="center">
            <Button>اضافه کردن آدرس پستی</Button>
          </Flex>
          <Divider />
          <Flex flexDirection="column" gap={1.6}>
            <Typography>از لیست زیر آدرس منتخب را انتخاب نمایید</Typography>
            {array.map((item: any, index: number) => (
              <ListBox key={index}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam
                  doloremque
                </Typography>
              </ListBox>
            ))}
          </Flex>
        </Container>
      </Box>
      <Box>
        <Typography>نام درج شده در فاکتور</Typography>
        <Container>
          <Typography>
            در صورتی که تمابل دارید فاکتور به نام شخص دیگری ثبت شود مضخصات ایشان را وارد کنید
          </Typography>
          <Flex gap={1.6}>
            <Input labelVariant="body" width="48%" label="نام" placeholder="علی" />
            <Input labelVariant="body" width="48%" label="نام و نام خانوادگی" placeholder="حسنی" />
          </Flex>
          <Flex flexDirection="column" gap={1} xs={[{ marginTop: "2.4rem" }]}>
            <label style={{ paddingRight: "1rem" }} htmlFor="textarea">
              پیام
            </label>
            <Textarea id="textarea" placeholder="پیام خود را وارد کنید" />
          </Flex>
        </Container>
      </Box>
    </Root>
  );
};

export default ClientInfo;

const Root = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2.4rem 0;
  padding: 3.2rem;
`;

const Box = styled.div`
  max-width: 88rem;
  width: 100%;
  height: fit-content;
  display: grid;
  padding: 2.4rem 1.6rem;
  gap: 3.2rem 0;
  background: #f7f4f2;
  border: 1px solid rgba(121, 116, 126, 0.3);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

const Container = styled(Flex)`
  flex-direction: column;
  gap: 3.2rem 0;
  padding: 1.6rem 10rem;
`;

const Button = styled.button`
  padding: 0.8rem 2.4rem;
  color: ${Colors.dark_slat};
  border: 1px solid #2d574c;
  border-radius: 16px;
  width: fit-content;
`;

const ListBox = styled.div`
  padding: 1.8rem 1.6rem;
  border: 1px solid #79747e;
  border-radius: 16px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #79747e;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 12rem;
  padding: 1rem;
  border: 1px solid #79747e;
  border-radius: 8px;
`;
