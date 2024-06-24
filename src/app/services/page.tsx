'use client';
import React, { useState } from 'react';

interface Module {
  code: string;
  name: string;
  onlyCode: string;
  codeAndReport: string;
}

interface Semester {
  name: string;
  modules: Module[];
}

interface Year {
  name: string;
  semesters: Semester[];
}

interface College {
  name: string;
  programs: {
    'BIT Computing': Year[] | string;
    'BIT Computing AI': Year[] | string;
  };
  discordLink?: string;
  ticketLink?: string;
}

const colleges: College[] = [
  {
    name: "Islington College",
    programs: {
      'BIT Computing': [
        {
          name: "Year 1",
          semesters: [
            {
              name: "Sem1",
              modules: [
                { code: "CC4057NI", name: "Introduction to Information Systems", onlyCode: "Rs 3000", codeAndReport: "Rs 5000" },
                { code: "CS4001NI", name: "Programming (Sem1)", onlyCode: "Rs 3000", codeAndReport: "Rs 5000" },
              ]
            },
            {
              name: "Sem2",
              modules: [
                { code: "CS4051NI", name: "Fundamentals of Computing", onlyCode: "Rs 3000", codeAndReport: "Rs 5000" },
                { code: "CS4001NI", name: "Programming (Sem2)", onlyCode: "Rs 5000", codeAndReport: "Rs 7000" },
              ]
            }
          ]
        },
        {
          name: "Year 2",
          semesters: [
            {
              name: "Sem1",
              modules: [
                { code: "CC5051NI", name: "Databases", onlyCode: "Rs 3000", codeAndReport: "-" },
                { code: "CS5053NI", name: "Cloud Computing and the Internet of Things", onlyCode: "Rs 8000", codeAndReport: "Rs 10000" },
                { code: "CS5002NI", name: "Software Engineering (Sem1)", onlyCode: "-", codeAndReport: "Rs 3000" },
              ]
            },
            {
              name: "Sem2",
              modules: [
                { code: "CC5067NI", name: "Smart Data Discovery", onlyCode: "Rs 3000", codeAndReport: "Rs 5000" },
                { code: "CS4001NI", name: "Programming (Sem2)", onlyCode: "Rs 7000", codeAndReport: "Rs 9000" },
                { code: "CS5002NI", name: "Software Engineering (Sem2)", onlyCode: "-", codeAndReport: "Rs 5000" },
                { code: "CS5054NI", name: "Advanced Programming and Technologies", onlyCode: "Rs 15000", codeAndReport: "Rs 18000" },
              ]
            }
          ]
        },
        {
          name: "Final Year Project",
          semesters: [
            {
              name: "Sem1",
              modules: [
                { code: "FYP", name: "Final Year Project", onlyCode: "-", codeAndReport: "Rs 10000+" },
              ]
            },
          ]
        }
      ],
      'BIT Computing AI': "Coming Soon"
    },
    discordLink: "https://discord.gg/GGRRFP2eFu",
    ticketLink: "https://discord.gg/SDupjK7zqZ"
  },
  {
    name: "Herald College",
    programs: {
      'BIT Computing': "Coming Soon",
      'BIT Computing AI': "Coming Soon"
    },
    discordLink: "https://discord.gg/herald",
    ticketLink: "https://heraldcollege.edu.np/contact-us"
  },
  {
    name: "ISMT College",
    programs: {
      'BIT Computing': "Coming Soon",
      'BIT Computing AI': "Coming Soon"
    },
    discordLink: "https://discord.gg/ismt",
    ticketLink: "https://ismtcollege.edu.np/contact"
  }
];

export default function ServicePage() {
  const [selectedCollege, setSelectedCollege] = useState<College>(colleges[0]);
  const [selectedProgram, setSelectedProgram] = useState<'BIT Computing' | 'BIT Computing AI'>('BIT Computing');

  const renderProgram = (program: Year[] | string) => {
    if (typeof program === 'string') {
      return (
        <div className="text-center py-12">
          <p className="text-2xl font-semibold text-gray-600 mb-4">{program}</p>
          {selectedCollege.discordLink && (
            <a href={selectedCollege.discordLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200">
              Join Discord
            </a>
          )}
        </div>
      );
    }

    return program.map((year, yearIndex) => (
      <div key={yearIndex} className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">{year.name}</h3>
        {year.semesters.map((semester, semesterIndex) => (
          <div key={semesterIndex} className="mb-8">
            <h4 className="text-xl font-medium text-gray-600 mb-3">{semester.name}</h4>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module Code</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Only Code</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code + Report</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {semester.modules.map((module, moduleIndex) => (
                    <tr key={moduleIndex} className={moduleIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{module.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{module.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{module.onlyCode}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{module.codeAndReport}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {year.name === "Final Year Project" && (
          <div className="mt-8 flex justify-center space-x-4">
            {selectedCollege.discordLink && (
              <a href={selectedCollege.discordLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                Join Discord
              </a>
            )}
            {selectedCollege.ticketLink && (
              <a href={selectedCollege.ticketLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
                Open Ticket
              </a>
            )}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            College Program Pricing
          </h1>
          {selectedCollege.discordLink && (
            <a href={selectedCollege.discordLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200">
              Join Discord
            </a>
          )}
        </div>

        <div className="mb-12 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trending </h2>
            <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-lg">
              <div>
                <p className="text-lg font-semibold text-gray-800">CS5054NI - Advanced Programming and Technologies</p>
                <p className="text-md text-gray-600">Price: Rs 15000 (Only Code) | Rs 18000 (Code + Report)</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-200">
                  🔥 Hot
                </button>
                {selectedCollege.discordLink && (
                  <a href={selectedCollege.discordLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                    Join Discord
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            {colleges.map((college) => (
              <button
                key={college.name}
                onClick={() => setSelectedCollege(college)}
                className={`px-4 py-2 rounded-full ${
                  selectedCollege.name === college.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                {college.name}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="inline-flex rounded-full p-1 bg-gray-200">
              <button
                onClick={() => setSelectedProgram('BIT Computing')}
                className={`px-4 py-2 rounded-full ${
                  selectedProgram === 'BIT Computing'
                    ? 'bg-white text-gray-800 shadow'
                    : 'text-gray-600 hover:text-gray-800'
                } transition-colors duration-200`}
              >
                BIT Computing
              </button>
              <button
                onClick={() => setSelectedProgram('BIT Computing AI')}
                className={`px-4 py-2 rounded-full ${
                  selectedProgram === 'BIT Computing AI'
                    ? 'bg-white text-gray-800 shadow'
                    : 'text-gray-600 hover:text-gray-800'
                } transition-colors duration-200`}
              >
                BIT Computing AI
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              {selectedCollege.name} - {selectedProgram}
            </h2>
            {renderProgram(selectedCollege.programs[selectedProgram])}
          </div>
        </div>

        {selectedCollege.name === "Islington College" && selectedProgram === 'BIT Computing' && selectedCollege.ticketLink && (
          <div className="mt-8 flex justify-center">
            <a href={selectedCollege.ticketLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
              Open Ticket
            </a>
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">(Popular Choice)</p>
        </div>
      </div>
    </div>
  );
}