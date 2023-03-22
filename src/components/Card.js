import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";

function Card(props){
    return(
        <Box w="100%" h="100%"  borderRadius='lg' overflow='hidden' backgroundColor="white" color="black">
            <img src={props.imageSrc} alt={props.title} />
            <VStack spacing={8} align="flex-start" justify="space-between" p={4}>
                <Heading as="h4"> {props.title} </Heading>
                <Text as="p">{props.description}</Text>
                <HStack>
                    <Text as="b"> {props.button}</Text>
                    <img src={props.icon} alt={props.title} />
                </HStack>
            </VStack>
        </Box>
    );
};

export default Card;