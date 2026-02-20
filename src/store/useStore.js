import { create } from 'zustand'

const useStore = create((set) => ({
  // Ship state
  shipPosition: [0, 1, 20],
  shipHeading: 0,

  // Auto-fly target
  flyTarget: null,
  setFlyTarget: (target) => set({ flyTarget: target }),
  clearFlyTarget: () => set({ flyTarget: null }),

  // Active panel (null | 'about' | 'skills' | 'projects' | 'contact')
  activePanel: null,
  panelDismissed: false,
  openPanel: (panel) => set({ activePanel: panel, panelDismissed: false }),
  closePanel: () => set({ activePanel: null, panelDismissed: true }),
  clearDismissed: () => set({ panelDismissed: false }),

  // UI flags
  isLoaded: false,
  setLoaded: () => set({ isLoaded: true }),
  showHints: true,
  hideHints: () => set({ showHints: false }),
}))

export default useStore
