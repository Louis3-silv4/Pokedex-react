require ('@testing-library/jest-dom')

const fakeFetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    status: 200,
    json: ()=> {
      return Promise.resolve({
        results: []
      })
    }
  })
})
global.fetch = fakeFetch
