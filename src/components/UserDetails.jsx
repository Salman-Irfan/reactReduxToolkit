import React, { useState } from 'react';
import {
    Box,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { fakeUserData } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';

const UserDetails = () => {
    const data = useSelector((state)=>{
        return state.users
    })
    const dispatch = useDispatch()

    const { colorMode } = useColorMode();

    // const handleAddUser = () => {
    //     const newUser = {
    //         id: users.length + 1,
    //         name: `User ${users.length + 1}`,
    //     };
    //     setUsers([...users, newUser]);
    // };
    const addNewUser = (name) => {
        dispatch(addUser(name));
    }
    const handleDeleteUser = (id) => {
        dispatch(removeUser(id));
    };

    return (
        <Center>
            <Box p={4} w={'90%'} >
                <Button mb={4} onClick={() => addNewUser(fakeUserData())}>
                    Add User
                </Button>
                <Table variant="striped" colorScheme={colorMode === 'light' ? 'teal' : 'gray'}>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((user, id) => (
                            <Tr key={id}>
                                <Td>{id+1}</Td>
                                <Td>{user}</Td>
                                <Td>
                                    <IconButton
                                        icon={<DeleteIcon />}
                                        colorScheme="red"
                                        onClick={() => handleDeleteUser(id)}
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                {/* <DisplayUsers /> */}
            </Box>
        </Center>
    );
};

export default UserDetails;
