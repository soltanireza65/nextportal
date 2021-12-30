import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackOutline, IoBookmarkOutline } from "react-icons/io5";
import Bars from "./icons/Bars";
interface IProps {}

const NewsList = (props: IProps) => {
  const [tabIndex, setTabIndex] = useState<number | null>(null);
  return (
    <Box>
      <Tabs
        variant="enclosed"
        isFitted
        onChange={(index) => setTabIndex(index + 1)}
        defaultIndex={1}
        bg="white"
        pt="28"
      >
        <TabList
          px={{
            base: "5",
            md: "28",
            lg: "28",
          }}
        >
          {[1, 2, 3].map((item: any, i: number) => (
            <Tab
              // pt={{
              //   base: "28",
              //   md: "28",
              //   lg: "28",
              // }}
              px={{
                base: "14",
                md: "14",
                lg: "14",
              }}
              pos="relative"
              _selected={{
                bg: "#171111",
                color: "white",
                zIndex: "1",
                mt: {
                  base: "40",
                  md: "40",
                  lg: "40",
                },
                pt: {
                  base: "14",
                  md: "14",
                  lg: "14",
                },
              }}
              css={{
                transition: "all 0.5s",
              }}
              _focus={{}}
              borderTopRadius="100"
              _before={{
                content: '""',
                position: "absolute",
                right: "-100px",
                bottom: "0",
                zIndex: "-1",
                bg: "#171111",
                width: "100px",
                height: "100px",
              }}
              _after={{
                content: '""',
                position: "absolute",
                left: "-100px",
                bottom: "0",
                zIndex: "-1",
                bg: "#171111",
                width: "100px",
                height: "100px",
              }}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                _before={{
                  content: '""',
                  right: "-101px",
                  bottom: "0",
                  bg: "white",
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderBottomLeftRadius: "100",
                }}
                _after={{
                  content: '""',
                  left: "-101px",
                  bottom: "0",
                  bg: "white",
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderBottomRightRadius: "100",
                }}
              >
                <Image boxSize="24" src="/images/template-2/projects.svg" />
                <Heading
                  display={{
                    base: "block",
                    md: "block",
                    lg: "block",
                  }}
                  fontSize="small"
                  fontWeight="normal"
                  my="6"
                >
                  طراحی سایت
                </Heading>
                <Text
                  display={{
                    base: "none",
                    md: "block",
                    lg: "block",
                  }}
                  fontSize="smaller"
                  mb={{
                    base: "14",
                    md: "14",
                    lg: "14",
                  }}
                >
                  لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                  طراح گرافیک از این متن به عنوان عنصری از می نماید
                </Text>
                {tabIndex - 1 == i && <Bars />}
              </Flex>
            </Tab>
          ))}
        </TabList>
        <TabPanels minH="100vh" bg="#171111">
          {[1, 2, 3].map((item: any, i: number) => (
            <TabPanel
              color="white"
              mx={{
                base: "14",
                md: "14",
                lg: "14",
              }}
            >
              <Flex mt="14">
                <Flex flexDirection="column" flex="1"></Flex>
                <Box flex="5" marginStart="8">
                  <Heading fontWeight="light" color="white">
                    محصولات پرتال خبری
                  </Heading>
                  <Text mt="8" fontSize="md" lineHeight="8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                    ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                    تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </Text>
                </Box>
              </Flex>

              <Flex>
                <Flex flexDirection="column" flex="1">
                  <Button
                    colorScheme="#171111"
                    boxShadow="0px 0px 15px 5px rgba(0,0,0,0.75)"
                    border="1px solid #171111"
                    _hover={{
                      border: "1px solid red",
                      // transform: "scale(1.1)",
                    }}
                    _focus={{}}
                    py="7"
                  >
                    محصولات
                  </Button>
                </Flex>
                <Box flex="5" marginStart="8">
                  <Flex>
                    <Accordion flex="1" defaultIndex={[0]} allowMultiple>
                      <AccordionItem bg="white" color="black" borderRadius="20">
                        <h2>
                          <AccordionButton _focus={{}} py="8">
                            <Box flex="1" textAlign="right">
                              سامانه آرشیو مدیا
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                          مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.{" "}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <Accordion flex="1" defaultIndex={[0]} allowMultiple marginStart="10">
                      <AccordionItem bg="white" color="black" borderRadius="20">
                        <h2>
                          <AccordionButton _focus={{}} py="8">
                            <Box flex="1" textAlign="right">
                              سامانه آرشیو مدیا
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                          مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.{" "}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Flex>
                  <Box flex="5" my="8">
                    <Heading fontWeight="light" color="white">
                      محصولات پرتال خبری
                    </Heading>
                    <Text mt="8" fontSize="md" lineHeight="8">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                      چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                      نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
                      گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                      طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می
                      توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
                      نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                      استفاده قرار گیرد.
                    </Text>
                  </Box>
                  <UnorderedList my="8">
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                  </UnorderedList>

                  <HStack spacing={4}>
                    <IoBookmarkOutline size="25" />
                    {[1, 2, 3, 4, 5, 6].map((item, i) => (
                      <Tag
                        size="lg"
                        key={i}
                        variant="solid"
                        colorScheme="#171111"
                        boxShadow="0px 0px 15px 0px rgba(0,0,0,0.75)"
                        border="1px solid #171111"
                        _hover={{
                          border: "1px solid red",
                        }}
                        py="3"
                        px="6"
                      >
                        <TagLabel fontWeight="normal" fontSize="sm">
                          Cyan
                        </TagLabel>
                      </Tag>
                    ))}
                  </HStack>
                </Box>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      <Flex
        justifyContent="flex-end"
        mt={{
          base: "8",
          md: "8",
          lg: "28",
        }}
      >
        <Flex
          cursor="pointer"
          alignItems="center"
          borderRadius="40"
          boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.1)"
          px="8"
          py="4"
        >
          <Link href="">
            <Heading fontWeight="light" fontSize="20" marginEnd="3">
              پروژه ها
            </Heading>
          </Link>
          <IoArrowBackOutline color="red" width="20" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NewsList;
