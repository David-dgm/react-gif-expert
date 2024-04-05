import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/UseFetchGifs';

describe('Test hook', () => {
    const categoryExpected = 'OnePunch';

    test('should return initial status', () => {
        const { result } = renderHook(() => useFetchGifs(categoryExpected));

        const { images, isLoading } = result.current;

        expect(images).toHaveLength(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return images list and loading status euqla to false', async () => {
        const { result } = renderHook(() => useFetchGifs(categoryExpected));

        await waitFor(() => {
            //  expect(result.current.images.length).toBeGreaterThan(0),
            const { images, isLoading } = result.current;
            expect(images.length).toBeGreaterThan(0);
            expect(isLoading).toBeFalsy();
        });
    });
});
