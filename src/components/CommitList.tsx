import {
    Stack,
    Space,
    Group,
    Text,
} from "@mantine/core";
import Moment from 'react-moment';


//Bringing in props from the Search component 
type CommitListProps = {
    message: string,
    date: string,
    key: string

}


export const CommitList = (props: CommitListProps) => {

//Using Moment.JS to convert the date being pulled from the github API
    const dateToFormat = new Date(props.date);

    return (

//Using Mantine to add simple style to the project
        <Stack>
            <Group>
                <div>
                    <Text>{props.message}</Text>
                    <Text size="xs" color="gray">
                        <Moment>{dateToFormat}</Moment>
                    </Text>
                    <Space h="md" />
                </div>
            </Group>
        </Stack>
    );
}

