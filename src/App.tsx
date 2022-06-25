import React from 'react';
import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { AppShell, Navbar, Header, Center, Text, Select, Divider } from '@mantine/core';
import { BrandGithub } from 'tabler-icons-react';

function App() {
  const repoData = [
    { value: 'github-crossroads', label: 'github-crossroads' },
    { value: 'react-poke', label: 'react-poke' },
    { value: 'movie-search', label: 'movie-search' },
    { value: 'DarkSoulsBosses', label: 'DarkSoulsBosses' },
  ]

  const [repo, setRepo] = useState<string>(repoData[0].value)


  /// This will handle the change on the selected repo and then pass it to thh search component to the API. 
  const handleChange = (selected: string | null) => {
    if (selected != null) {

      setRepo(selected);
      console.log(selected);
    }
  };


  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 200 }} p="xs">
        <div className="field">
          <Select
            clearable
            searchable
            data={repoData}
            placeholder="Filter by Repo"
            nothingFound="Nothing found"
            value={repo}
            onChange={(event) => handleChange(event)}
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
      <Search repo={repo} />
    </AppShell>
  );
}

export default App;
