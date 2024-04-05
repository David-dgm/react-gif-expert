import { getGifs } from '../../src/helpers/GifsProvider';

describe('Pruebas en GfsProvider', () => {
    const category = 'One-Punch';

    test('should return a gif list', () => {
        const gifList = getGifs(category);

        gifList.then(() =>
            expect(gifList)
                .toHaveLength(10)
                .map((gif) =>
                    expect(gif).toMatchObject({
                        id,
                        title,
                        url,
                    })
                )
        );
    });
});
