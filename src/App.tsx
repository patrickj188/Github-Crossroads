import React from 'react';
import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { AppShell, Navbar, Header, Center, Input, Text, Select, Divider, Timeline } from '@mantine/core';
import { BrandGithub } from 'tabler-icons-react';

function App() {
  const [repo, setRepo] = useState<string>('')

  const data = [
    { value: 'github-crossroads', label: 'github-crossroads' },
    { value: 'react-poke', label: 'react-poke' },
    { value: 'movie-search', label: 'movie-search' },
    { value: 'DarkSoulsBosses', label: 'DarkSoulsBosses' },
  ]


  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRepo(event.target.value);
    console.log(event.target.value);
  };


  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 200 }} p="xs">
        <div className="field">
          <Select
            clearable
            searchable
            data={data}
            placeholder="Filter by Repo"
            nothingFound="Nothing found"
            onChange={event => handleChange}
          />
        </div>

      </Navbar>}
      header={<Header height={60} p="xs">
        <Center>
          <BrandGithub
            size={50}
            strokeWidth={1}
            color={'black'}
          />
          <Text size="xl">
            Github Crossroads
          </Text>
        </Center>
      </Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Text size="xl">Commit Comments</Text>
      <Divider my="xl" />
      <Search />
    </AppShell>
  );
}

export default App;
