import { Flex, Input, Typography, Colors } from "primitives";
import React from "react";
import styled from "styled-components";
import { useGetProduct, useGetMenuBar } from "./client-info.services";
import offer1 from "assets/images/offer1.png";
import Image from "next/image";
import Sample from "@components/layout/TreeItem";

const ClientInfo = () => {
  // const { data, isLoading, isFetching } = useGetProduct();
  //   background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) bottom/100% 60% no-repeat;

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
          <GridLayout>
            <Input labelVariant="body" label="نام" placeholder="علی" />
            <Input labelVariant="body" label="نام و نام خانوادگی" placeholder="حسنی" />
          </GridLayout>
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
          <GridLayout>
            <Input labelVariant="body" label="نام" placeholder="علی" />
            <Input labelVariant="body" label="نام و نام خانوادگی" placeholder="حسنی" />
          </GridLayout>
          <Flex flexDirection="column" gap={1} xs={[{ marginTop: "2.4rem" }]}>
            <label style={{ paddingRight: "1rem" }} htmlFor="textarea">
              پیام
            </label>
            <Textarea id="textarea" placeholder="پیام خود را وارد کنید" />
          </Flex>
        </Container>
      </Box>
      <button
        onClick={() => {
          <Sample />;
        }}
      >
        test
      </button>
    </Root>
  );
};

export default ClientInfo;

const ItemGrid = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  text-align: center;
  font-size: 2rem;
  display: flex;
`;

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

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
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
